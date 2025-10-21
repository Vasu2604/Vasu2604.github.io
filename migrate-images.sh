#!/bin/bash

# Migration script to copy images from old portfolio to new portfolio
# Usage: chmod +x migrate-images.sh && ./migrate-images.sh

echo "🖼️  Migrating images from old portfolio..."

# Set source directory (adjust path if needed)
OLD_PORTFOLIO="../images"
NEW_IMAGES="./public/images"

# Create images directory if it doesn't exist
mkdir -p "$NEW_IMAGES"

# Check if old portfolio images exist
if [ ! -d "$OLD_PORTFOLIO" ]; then
    echo "❌ Old portfolio images directory not found at: $OLD_PORTFOLIO"
    echo "Please adjust the OLD_PORTFOLIO path in this script"
    exit 1
fi

# Copy profile image
echo "📸 Copying profile image..."
if [ -f "$OLD_PORTFOLIO/v2.jpg" ]; then
    cp "$OLD_PORTFOLIO/v2.jpg" "$NEW_IMAGES/profile.jpg"
    echo "✅ Profile image copied"
else
    echo "⚠️  Profile image not found, you'll need to add it manually"
fi

# Copy project images
echo "📸 Copying project images..."
images=(
    "chatbot-speech.png"
    "LLM.jpg"
    "Credit-score.png"
    "game-frog.png"
)

for img in "${images[@]}"; do
    if [ -f "$OLD_PORTFOLIO/$img" ]; then
        cp "$OLD_PORTFOLIO/$img" "$NEW_IMAGES/$img"
        echo "✅ Copied: $img"
    else
        echo "⚠️  Not found: $img"
    fi
done

echo ""
echo "🎉 Migration complete!"
echo ""
echo "Images location: ./public/images/"
echo ""
echo "Missing images? Add them manually to ./public/images/"



