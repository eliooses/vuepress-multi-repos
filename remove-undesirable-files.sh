#!/usr/bin/env bash

// remove everything else that is not markdown file
find ./docs/src -type f ! -name '*.md' -delete
