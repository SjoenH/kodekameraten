#!/bin/bash

#Change directory to where this file is at.
cd "`dirname "$0"`" 

echo -e "\033[0;32mBuilding with Hugo\033[0m"

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

# Push to GitHub.
echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"
git push origin master