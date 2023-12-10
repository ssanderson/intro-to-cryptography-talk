#!/bin/bash

set -euo pipefail

VERSION="v18.18.2"
PNPM_VERSION="8.10.5"
NODE_NAME="node-$VERSION-linux-x64"
HASH="75aba25ae76999309fc6c598efe56ce53fbfc221381a44a840864276264ab8ac"
DEST="$HOME/.local/node"

cd /tmp
rm -rf ./node-install
mkdir ./node-install
cd ./node-install

wget "https://nodejs.org/dist/$VERSION/$NODE_NAME.tar.xz"

echo "$HASH $NODE_NAME.tar.xz" | sha256sum -c

echo "Unpack to $DEST and install? This will delete everything in $DEST."
read -p "Choice (y/Y/n/N): " nodeChoice

case "$nodeChoice" in
    y|Y )
        rm -rf "$DEST"
        tar -xJvf "$NODE_NAME.tar.xz"
        mv "$NODE_NAME" "$DEST"
        ;;
    * )
        echo "Aborting"
        exit 1
        ;;
esac

echo -e "\n"

export PATH="$DEST/bin":$PATH
echo "Installed Node"
echo "Node Path: $(which node)"
echo "Node Version: $(node --version)"
echo "Npm Path: $(which npm)"
echo "Npm Version: $(npm --version)"

echo -e "\n"

echo "Node installed successfully. Would you like to install pnpm (y/n)?"
read -p "Choice (y/Y/n/N): " pnpmChoice

case "$pnpmChoice" in
    y|Y )
        npm install -g pnpm@$PNPM_VERSION
        ;;
    * )
        exit 1
        ;;
esac

echo "Pnpm Path: $(which pnpm)"
echo "Pnpm Version: $(pnpm --version)"
