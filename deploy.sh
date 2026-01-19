#!/usr/bin/env sh

set -e

#nvm
source ~/.nvm/nvm.sh
nvm use 22

# build
pnpm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'docs: update docs.'

git push -f git@github.com:snowycn324/rtx-icons.git master:gh-pages

cd -