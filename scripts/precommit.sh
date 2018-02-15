#!/bin/sh
npm test -- --updateSnapshot
npm run storybook
npm run build

git add dist/ docs/