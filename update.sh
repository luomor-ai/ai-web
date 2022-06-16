#!/bin/bash
cd ..
git checkout feature/luomor
npm run build:prod
cd ai-web
rm -rf webroot/*
cp -r ../dist/* webroot
git add .
git commit -a -m 'update'
git push -u origin main
cd ..
git checkout main
