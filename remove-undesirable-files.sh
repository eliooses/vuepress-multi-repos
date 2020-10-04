#!/usr/bin/env bash

// remove everything else that is not markdown file and empty folders
find ./docs/src -type f ! -name '*.md' -delete
find ./docs/src -type d -empty -delete