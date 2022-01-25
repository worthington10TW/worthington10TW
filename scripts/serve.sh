#!/bin/sh

# script/server: Launch the application

set -e 

cd "$(dirname "$0")/.."

bundle exec jekyll serve