#!/bin/bash

# Build Table of Contents for PRISM documentation
# Scans all markdown files and extracts headings to create a comprehensive TOC

OUTPUT_FILE="docs/03-table-of-contents.md"

# Function to convert heading text to VitePress anchor format
# VitePress: lowercase, spaces to hyphens, remove special chars
heading_to_anchor() {
    echo "$1" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9 -]//g' | sed 's/ /-/g' | sed 's/--*/-/g'
}

# Function to get page path from filename (without .md extension)
get_page_path() {
    local file="$1"
    local basename=$(basename "$file" .md)
    if [ "$basename" = "index" ]; then
        echo "/"
    else
        echo "/$basename"
    fi
}

# Start building the output
cat > "$OUTPUT_FILE" << 'EOF'
# PRISM Table of Contents

*This document provides a comprehensive, hierarchical table of contents for all PRISM documentation with direct links to specific sections.*

## Navigation Hub

This page serves as the primary navigation hub for the PRISM documentation collection, providing direct links to all documents and their major sections.

EOF

# Process each section
process_section() {
    local section_name="$1"
    local pattern="$2"

    echo "" >> "$OUTPUT_FILE"
    echo "## $section_name" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"

    # Find files matching the pattern, sorted
    for file in docs/${pattern}*.md; do
        [ -e "$file" ] || continue

        # Skip the TOC file itself
        [ "$file" = "$OUTPUT_FILE" ] && continue

        local page_path=$(get_page_path "$file")
        local first_heading=true

        # Extract headings from the file
        while IFS= read -r line; do
            # Remove any carriage returns
            line=$(echo "$line" | tr -d '\r')

            # Count the number of # characters
            level=$(echo "$line" | sed 's/^\(#*\).*/\1/' | wc -c)
            level=$((level - 1))

            # Extract the heading text (remove # and leading/trailing spaces)
            heading_text=$(echo "$line" | sed 's/^#*[ ]*//')

            if [ $first_heading = true ]; then
                # First heading is the document title - link to the page
                echo "### [$heading_text]($page_path)" >> "$OUTPUT_FILE"
                first_heading=false
            else
                # Subsequent headings - link to anchors
                anchor=$(heading_to_anchor "$heading_text")

                # Calculate indentation (level - 2 since h1 is doc title)
                indent_level=$((level - 2))
                indent=""
                for ((i=0; i<indent_level; i++)); do
                    indent="  $indent"
                done

                echo "${indent}- [$heading_text](${page_path}#${anchor})" >> "$OUTPUT_FILE"
            fi
        done < <(grep '^#' "$file")

        echo "" >> "$OUTPUT_FILE"
    done
}

# Process each section based on numbering scheme
process_section "Introduction & Overview" "0[0-3]"
process_section "Foundation & Data Architecture" "1[0-9]"
process_section "AI Architecture & Philosophy" "2[0-9]"
process_section "Examples & Demonstrations" "3[0-9]"
process_section "Implementation & Operations" "4[0-9]"
process_section "Infrastructure & Processing" "5[0-9]"
process_section "Collaboration & Growth" "6[0-9]"
process_section "Organization & Research" "7[0-9]"
process_section "Technical Deep Dives" "8[0-9]"
process_section "References & Resources" "9[0-9]"

# Add footer
# cat >> "$OUTPUT_FILE" << 'EOF'
# ---

# *This table of contents is automatically generated.*
# EOF

echo "Table of contents generated at $OUTPUT_FILE"
