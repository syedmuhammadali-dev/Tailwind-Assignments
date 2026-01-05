#!/bin/bash
set -e

cd "$(dirname "$0")"

# Create public directory structure
mkdir -p ../public
mkdir -p ../public/src
mkdir -p ../public/images
mkdir -p ../public/js

# Copy static files
cp index.html ../public/
cp -r images/* ../public/images/ 2>/dev/null || true
cp -r js/* ../public/js/ 2>/dev/null || true

# Build Tailwind CSS
npx @tailwindcss/cli -i ./src/input.css -o ../public/src/output.css --minify

echo "Build completed successfully!"

