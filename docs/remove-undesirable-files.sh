#!/usr/bin/env bash

// remove everything else that is not markdown file
find . -type f ! -name '*.md' ! -name '*.sh'  -delete