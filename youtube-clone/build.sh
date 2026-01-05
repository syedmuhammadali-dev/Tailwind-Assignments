#!/bin/bash
set -e

# Create public directory structure
mkdir -p ../public
mkdir -p ../public/src
mkdir -p ../public/images
mkdir -p ../public/js

# Copy static files
cp index.html ../public/
cp -r images/* ../public/images/
cp -r js/* ../public/js/

# Build Tailwind CSS
npx @tailwindcss/cli -i ./src/input.css -o ../public/src/output.css --minify

echo "Build completed successfully!"
