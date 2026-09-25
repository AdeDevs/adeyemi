const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=1";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

export async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
}

export async function getCurrentlyPlaying() {
  const { access_token } = await getAccessToken();

  if (!access_token) {
    return { isPlaying: false, error: "Unable to retrieve access token" };
  }

  // 1. Check live currently playing
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (response.status === 204 || response.status > 400) {
    // 2. Fallback to recently played if idle
    const recentResponse = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (recentResponse.ok) {
      const recentData = await recentResponse.json();
      if (recentData?.items?.length > 0) {
        const item = recentData.items[0].track;
        return {
          isPlaying: false,
          isRecent: true,
          title: item.name,
          artist: item.artists.map((a) => a.name).join(", "),
          album: item.album.name,
          albumImageUrl: item.album.images?.[0]?.url || "",
          spotifyUrl: item.external_urls.spotify,
        };
      }
    }

    return { isPlaying: false };
  }

  const song = await response.json();

  if (!song || !song.item) {
    return { isPlaying: false };
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images?.[0]?.url || "";
  const spotifyUrl = song.item.external_urls.spotify;
  const progressMs = song.progress_ms;
  const durationMs = song.item.duration_ms;

  return {
    isPlaying,
    isRecent: false,
    title,
    artist,
    album,
    albumImageUrl,
    spotifyUrl,
    progressMs,
    durationMs,
  };
}

export default async function handler(req, res) {
  try {
    const data = await getCurrentlyPlaying();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=30");
    return res.status(200).json(data);
  } catch (error) {
    console.error("Spotify API error:", error);
    return res.status(200).json({ isPlaying: false, error: error.message });
  }
}
