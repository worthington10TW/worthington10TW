#!/bin/sh

# This script will convert all jpg and png images to webp within the assets folder

set -e

function install_if_not_exist() {
    which $1 >/dev/null 2>&1 || brew install $2
}

cd "$(dirname "$0")/.."

install_if_not_exist cwebp webp
install_if_not_exist parallel parallel

echo "==> Finding jpg, jpeg and png images and converting to webp"

find -E . -regex '.*/assets/.*/.*\.(jpg|jpeg|png)' | parallel -eta cwebp {} -o {.}.webp

echo "==> Yay! all done."
