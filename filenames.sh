#!/bin/bash

# Define the target directory
DOCS_DIR="./docs"

# Check if the directory exists
if [[ ! -d "$DOCS_DIR" ]]; then
  echo "Error: Directory '$DOCS_DIR' does not exist."
  exit 1
fi

# Iterate over each markdown file in the directory
for FILE in "$DOCS_DIR"/*.md; do
  # Skip if no files found
  [[ -e "$FILE" ]] || continue

  # Extract the file name
  BASENAME=$(basename "$FILE")

  # Make the file name lowercase
  NEWNAME=$(echo "$BASENAME" | tr '[:upper:]' '[:lower:]')

  # Remove the starting 'prism - '
  NEWNAME=${NEWNAME#prism - }

  # Replace ' - ' with '-'
  NEWNAME=${NEWNAME// - /-}

  # Replace ' ' with '-'
  NEWNAME=${NEWNAME// /-}

  # Rename the file
  mv "$FILE" "$DOCS_DIR/$NEWNAME"

  echo "Renamed: $BASENAME -> $NEWNAME"
done

echo "All files processed."
