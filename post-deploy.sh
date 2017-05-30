#!/usr/bin/env bash

# Replace ?REV with last commit (short) hash in html files
sed -i 's/\?REV/\?'"$(git rev-parse --short HEAD)"'/g' public/*.html
