#!/bin/bash
# Cloud sessions overwrite the global git config with Claude's identity,
# so set the repo-local identity that CLAUDE.md asks for.
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "${CLAUDE_PROJECT_DIR:-.}"
git config user.name "Adeyemi Akinyemi"
git config user.email "89089354+AdeDevs@users.noreply.github.com"
