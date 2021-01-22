#!/usr/bin/env bash

echo "Updating code ..."
git reset --hard HEAD
git fetch
git rebase origin/master
echo "✅ "

echo

# Compile assets
echo "Compiling assets ..."
yarn prod
echo "✅ "

echo

echo "Deployment done 🎉 "

echo
