#! /bin/bash
npm install
jspm install
npm config set bin-links false
#npm rebuild node-sass
npm rebuild node-sass --force

gulp watch
