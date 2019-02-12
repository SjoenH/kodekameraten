#!/bin/bash
cd /Users/henry/git/kodekameraten/

echo -e "\033[0;32mWhat's the Title?\033[0m"

read title
hugo -t terminal new content/post/$title.md

code content/post/$title.md