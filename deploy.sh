#!/bin/bash

git push origin --delete gh-pages
git branch gh-pages
git checkout gh-pages
git merge main --no-edit
git add dist -f
git commit -m "deploy"
git subtree push --prefix dist origin gh-pages
git checkout main