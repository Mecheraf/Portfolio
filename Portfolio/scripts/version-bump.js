#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Read package.json
const packagePath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

// Get the last commit message
let lastCommitMessage = '';
try {
  lastCommitMessage = execSync('git log -1 --pretty=%B', { encoding: 'utf8' }).trim();
} catch (error) {
  console.log('Could not get commit message, defaulting to patch');
}

// Determine version bump type based on commit message
let versionType = 'patch'; // default

if (lastCommitMessage.includes('BREAKING CHANGE') || lastCommitMessage.startsWith('major')) {
  versionType = 'major';
} else if (lastCommitMessage.startsWith('minor')) {
  versionType = 'minor';
} else if (lastCommitMessage.startsWith('patch')) {
  versionType = 'patch';
}

// Skip version bump for certain commit types
const skipTypes = ['docs:', 'style:', 'refactor:', 'test:', 'chore:'];
const shouldSkip = skipTypes.some(type => lastCommitMessage.startsWith(type));

if (shouldSkip) {
  console.log(`Skipping version bump for commit type: ${lastCommitMessage.split(':')[0]}`);
  process.exit(0);
}

console.log(`Bumping ${versionType} version based on commit: "${lastCommitMessage}"`);

// Bump version
try {
  execSync(`npm version ${versionType} --no-git-tag-version`, { stdio: 'inherit' });
  
  // Read the new version
  const newPackageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  console.log(`Version bumped to: ${newPackageJson.version}`);
} catch (error) {
  console.error('Error bumping version:', error.message);
  process.exit(1);
}