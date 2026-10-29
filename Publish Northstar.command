#!/bin/bash
set -e
cd "$(dirname "$0")"
OWNER="${NORTHSTAR_GITHUB_OWNER:-IordanisKokk}"
REPO="${NORTHSTAR_GITHUB_REPO:-northstar-game-development}"
REMOTE="https://github.com/${OWNER}/${REPO}.git"

echo "Publishing Northstar to ${OWNER}/${REPO}"
echo "Make sure you've first created that EMPTY public GitHub repository."
echo
command -v git >/dev/null || { echo 'Git is not installed.'; read -r -p 'Press Return to close...'; exit 1; }
if [ ! -d .git ]; then git init; fi
git add .
if ! git diff --cached --quiet; then
  git commit -m "Publish Northstar Game Development v4"
fi
git branch -M main
if git remote get-url origin >/dev/null 2>&1; then
  CURRENT="$(git remote get-url origin)"
  if [ "$CURRENT" != "$REMOTE" ]; then
    echo "Existing origin $CURRENT does not match expected remote $REMOTE"
    echo 'Edit the script or set NORTHSTAR_GITHUB_OWNER / NORTHSTAR_GITHUB_REPO as needed.'
    read -r -p 'Press Return to close...'; exit 1
  fi
else
  git remote add origin "$REMOTE"
fi
if git push -u origin main; then
  echo
  echo "Source uploaded: https://github.com/${OWNER}/${REPO}"
  echo "Now visit Settings > Pages > Deploy from a branch > main > /(root) > Save"
  LOWER_OWNER="$(printf %s "$OWNER" | tr "[:upper:]" "[:lower:]")"
  echo "Expected site after Pages is enabled: https://${LOWER_OWNER}.github.io/${REPO}/"
else
  echo 'Push failed. Check GitHub authentication and that the repository exists and is empty.'
fi
echo
read -r -p 'Press Return to close...'
