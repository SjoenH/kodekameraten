#!/bin/bash

# cd /Users/henry/git/kodekameraten

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build the project.
hugo -t terminal # if using a theme, replace with `hugo -t <YOURTHEME>`

# Move content from public folder into root.
cp -r public/* .
rm -rf public

# Add changes to git.
git add .

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"
echo "${msg}"

# Push source and build repos.
msg = $(git push origin master)
echo "${msg}"