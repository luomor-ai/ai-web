#!/bin/bash
rm -rf webroot/*
cp -r ../dist/* webroot
git add .
git commit -a -m 'update'
git push -u origin main
