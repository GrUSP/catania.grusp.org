#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd blog/.vuepress/dist

# if you are deploying to a custom domain
echo 'catania.grusp.org' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
git push -f https://github.com/GrUSP/catania.grusp.org.git

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
