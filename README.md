# Adeyemi Akinyemi — Portfolio

Personal portfolio site for Adeyemi Akinyemi, frontend engineer. Live at **[iamadedevs.vercel.app](https://iamadedevs.vercel.app)**.

## Features

- Single-page layout: Hero, About, Projects, Services and Contact sections
- Light and dark themes, saved in `localStorage`
- Nothing OS–inspired details: custom cursor, interactive dot-grid background, dot-matrix glyphs and a page loader
- "Currently Listening" widget showing what's playing on Spotify, via a Vercel serverless function
- Contact form sent through [FormSubmit](https://formsubmit.co)
- Downloadable résumé (`public/resume.pdf`)

## Tech stack

- [React 18](https://react.dev) + [Vite](https://vitejs.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) and ScrollReveal for animation
- Font Awesome, Lucide and Ionicons for icons
- [Vercel](https://vercel.com) for hosting and the `/api` serverless function

## Project structure

```
api/
  spotify.js          Serverless function: now playing / recently played
public/               Static files (résumé, favicon)
src/
  components/         Page sections and UI components
  data/projectsData.js  Projects shown in the Projects section
  assets/             Project screenshots
  styles/             Global and legacy CSS
```

To add or edit a project, update `src/data/projectsData.js` and put its screenshots in `src/assets/`.

## Getting started

```bash
bun install      # or: npm install
bun run dev      # or: npm run dev
```

Other scripts: `build`, `preview`, `lint`.

`vite` alone doesn't run the `/api` function, so the Spotify widget won't load with `bun run dev`. To run the function locally, use the [Vercel CLI](https://vercel.com/docs/cli):

```bash
vercel dev
```

## Environment variables

The Spotify widget needs these, set in Vercel under **Settings → Environment Variables** and in a local `.env` (see `.env.example`):

| Variable | Description |
|---|---|
| `SPOTIFY_CLIENT_ID` | Client ID of your Spotify developer app |
| `SPOTIFY_CLIENT_SECRET` | Client secret of that app |
| `SPOTIFY_REFRESH_TOKEN` | Refresh token with the `user-read-currently-playing` and `user-read-recently-played` scopes |

Never commit these values. `.env` is ignored by git.

### Getting a Spotify refresh token

1. In the [Spotify developer dashboard](https://developer.spotify.com/dashboard), open your app and register a redirect URI such as `http://127.0.0.1:3000/callback`.
2. Open this URL in a browser, approve access, and copy the `code` from the address it redirects to (stop before any `&`):
   ```
   https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http%3A%2F%2F127.0.0.1%3A3000%2Fcallback&scope=user-read-currently-playing%20user-read-recently-played
   ```
3. Within about 10 minutes, exchange the code for tokens:
   ```bash
   curl -X POST https://accounts.spotify.com/api/token \
     -u "YOUR_CLIENT_ID:YOUR_CLIENT_SECRET" \
     -d grant_type=authorization_code \
     -d code=YOUR_CODE \
     --data-urlencode redirect_uri=http://127.0.0.1:3000/callback
   ```
4. Copy `refresh_token` from the response into `SPOTIFY_REFRESH_TOKEN`.

## Deployment

The site deploys to Vercel. `vercel.json` sends every route to `index.html`; files in `api/` become serverless functions. Changing environment variables requires a redeploy.
