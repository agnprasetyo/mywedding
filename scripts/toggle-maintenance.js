#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configPath = path.join(__dirname, '..', 'src', 'config', 'config.js');

/**
 * Simple maintenance mode toggle script
 * 
 * Usage:
 * - npm run maintenance:on    - Enable maintenance mode
 * - npm run maintenance:off   - Disable maintenance mode  
 * - npm run maintenance:status - Check current status
 */

function readConfig() {
  try {
    const content = fs.readFileSync(configPath, 'utf8');
    return content;
  } catch (error) {
    console.error('❌ Error reading config file:', error.message);
    process.exit(1);
  }
}

function writeConfig(content) {
  try {
    fs.writeFileSync(configPath, content, 'utf8');
  } catch (error) {
    console.error('❌ Error writing config file:', error.message);
    process.exit(1);
  }
}

function toggleMaintenance(enabled) {
  const content = readConfig();
  
  // Replace the maintenance enabled value
  const newContent = content.replace(
    /enabled:\s*(true|false)/,
    `enabled: ${enabled}`
  );
  
  writeConfig(newContent);
  
  const status = enabled ? 'ON' : 'OFF';
  const emoji = enabled ? '🔧' : '✅';
  
  console.log(`${emoji} Maintenance mode is now ${status}`);
  console.log(`📝 Updated: ${configPath}`);
}

function checkStatus() {
  const content = readConfig();
  const match = content.match(/enabled:\s*(true|false)/);
  
  if (match) {
    const isEnabled = match[1] === 'true';
    const status = isEnabled ? 'ON' : 'OFF';
    const emoji = isEnabled ? '🔧' : '✅';
    
    console.log(`${emoji} Maintenance mode is currently ${status}`);
  } else {
    console.log('❌ Could not determine maintenance mode status');
  }
}

// Main execution
const command = process.argv[2];

switch (command) {
  case 'on':
    toggleMaintenance(true);
    break;
  case 'off':
    toggleMaintenance(false);
    break;
  case 'status':
    checkStatus();
    break;
  default:
    console.log('🔧 Maintenance Mode Toggle');
    console.log('');
    console.log('Usage:');
    console.log('  npm run maintenance:on     - Enable maintenance mode');
    console.log('  npm run maintenance:off    - Disable maintenance mode');
    console.log('  npm run maintenance:status - Check current status');
    console.log('');
    console.log('Current status:');
    checkStatus();
    break;
}
