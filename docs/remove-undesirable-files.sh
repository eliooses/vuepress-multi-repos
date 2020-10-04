#!/usr/bin/env bash

// remove everything else that is not markdown file
find ./docs -type f ! -name '*.md' ! -name 'remove-underisable-files.sh'  -delete
