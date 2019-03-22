#!/bin/bash

#Change directory to where this file is at.
cd "`dirname "$0"`" 

echo -e "\n\033[0;32mBuilding with Hugo\033[0m"

# Build the website.
hugo

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
echo -e "\n\033[0;32mDeploying updates to GitHub...\033[0m\n"
git push origin master

echo -e "\n\033[0;32mFinished procedure.\t\tGoodbye!\033[0m"
