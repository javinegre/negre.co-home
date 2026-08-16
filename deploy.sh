#!/usr/bin/env bash

echo "Updating code ..."
git reset --hard HEAD
git fetch
git rebase origin/master
echo "✅ "

echo

echo "Installing dependencies ..."
yarn install --frozen-lockfile
echo "✅ "

echo

# Compile assets
echo "Building ..."
yarn build
echo "✅ "

echo

# The build output (dist/server/entry.mjs) is require()'d by the parent
# negre.co-server gateway process at startup and cached in its module
# registry, so a content-only deploy needs the gateway reloaded to pick it
# up — unlike the old static build, which the gateway re-read from disk
# per-request with no restart needed.
echo "Reloading gateway ..."
(cd ../.. && yarn pm2:reload)
echo "✅ "

echo

echo "Deployment done 🎉 "

echo
