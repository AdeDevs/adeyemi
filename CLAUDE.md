# CLAUDE.md

## Git commits and pull requests

- Commit as `Adeyemi Akinyemi <89089354+AdeDevs@users.noreply.github.com>`. Set this with `git config user.name` / `git config user.email` before committing if it isn't already.
- Don't add `Co-Authored-By`, `Claude-Session` or any other Claude attribution lines to commit messages.
- Don't add "Generated with Claude Code" or session links to pull request descriptions.

## Project notes

- Personal portfolio: React 18 + Vite + Tailwind CSS v4, deployed on Vercel.
- `api/spotify.js` is a Vercel serverless function. Its credentials come only from the `SPOTIFY_*` environment variables; never write secrets into the code.
- Checks: `bun run lint`, `bun run build`.
