#!/usr/bin/env sh
# abort on errors

set -e

# build
npm run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git config user.name Naerriel
git config user.email naerriel@gmail.com
git config credential.username Naerriel
git commit -m 'deploy'
git push -f git@github.com:Naerriel/set-game.git master:gh-pages
cd -
