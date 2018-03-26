#!/bin/sh
npm test -- --updateSnapshot
rm -rf dist/ docs/
npm run storybook
npm run build

git add dist/ docs/