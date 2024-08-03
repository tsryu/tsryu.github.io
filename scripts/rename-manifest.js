const fs = require('fs');
const path = require('path');

// Build directory
const publicDir = path.resolve(__dirname, '../public');

// Function to find the latest manifest file
const findManifestFile = () => {
  const files = fs.readdirSync(publicDir);
  const manifestFiles = files.filter(
    file => file.startsWith('site_') && file.endsWith('.webmanifest'),
  );

  if (manifestFiles.length === 0) {
    throw new Error('No manifest file found');
  }

  // Return the most recent manifest file based on timestamp in the filename
  return manifestFiles.sort().pop(); // Get the latest file
};

const manifestFileName = findManifestFile();
const manifestFile = path.join(publicDir, manifestFileName);
const timestamp = Date.now();
const newManifestFile = path.join(publicDir, `site_${timestamp}.webmanifest`);

// Rename the manifest file
fs.renameSync(manifestFile, newManifestFile);

// Update index.html to point to new manifest file
const indexFile = path.join(publicDir, 'index.html');
let indexContent = fs.readFileSync(indexFile, 'utf8');
indexContent = indexContent.replace(
  /site_\d+\.webmanifest/,
  `site_${timestamp}.webmanifest`,
);
fs.writeFileSync(indexFile, indexContent);

console.log(
  `Manifest file renamed to site_${timestamp}.webmanifest and index.html updated.`,
);
