#!/bin/bash
set -e
usage () {
    echo 'Usage: ./release <version>'
}

if [ -z $1 ]; then
    usage
    exit 1
fi

echo "Release version $1"
echo "Create branch"
git checkout master
git pull
git checkout -b release_$1

echo "Set version $1 in package.json"
sed "s/\"version\": \".*\",/\"version\": \"$1\",/" package.json > package2.json
mv package2.json package.json

echo "Update lock file by executing npm install"
npm install

echo "Push to repo"
git add package.json
git add package-lock.json
git commit -m "Set version number to $1"
git push -u origin release_$1

echo "Press any key when PR is merged"
read -n 1 -s

echo "Pull master and create tag"
git checkout master
git pull
git tag -a $1
git push --tags
