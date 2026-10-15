#!/usr/bin/env bash
# Baut die Seite für GitHub Pages und veröffentlicht dist/ auf dem Branch gh-pages.
set -euo pipefail
cd "$(dirname "$0")/.."

remote=$(git remote get-url origin)
repo=$(basename -s .git "$remote")
owner=$(basename "$(dirname "$remote")" | sed 's/.*://')
owner_lc=$(echo "$owner" | tr '[:upper:]' '[:lower:]')

SITE_URL="https://${owner_lc}.github.io" BASE_PATH="/${repo}" npx astro build
touch dist/.nojekyll

cd dist
rm -rf .git
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy $(date -u +%Y-%m-%dT%H:%MZ)"
git push -q -f "$remote" gh-pages
rm -rf .git
echo "Live: https://${owner_lc}.github.io/${repo}/"
