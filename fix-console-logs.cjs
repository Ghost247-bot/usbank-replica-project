const fs = require('fs');
const path = require('path');

// Directories to search
const srcDir = path.join(__dirname, 'src');

// Files to ignore
const ignoreFiles = [
  'logger.ts',
  'vite-env.d.ts',
  'main.tsx',
];

// Console methods to replace
const consoleMethods = ['log', 'error', 'warn', 'info', 'debug'];

function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (!ignoreFiles.includes(file)) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

function fixConsoleLogs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Replace console.log with logger.debug
    content = content.replace(/console\.log\(/g, 'logger.debug(');
    
    // Replace console.error with logger.error
    content = content.replace(/console\.error\(/g, 'logger.error(');
    
    // Replace console.warn with logger.warn
    content = content.replace(/console\.warn\(/g, 'logger.warn(');
    
    // Replace console.info with logger.info
    content = content.replace(/console\.info\(/g, 'logger.info(');
    
    // Replace console.debug with logger.debug
    content = content.replace(/console\.debug\(/g, 'logger.debug(');
    
    // Add import statement if logger is used
    if (content.includes('logger.') && !content.includes('import { logger }')) {
      // Find the last import statement
      const importRegex = /import[^;]+;/g;
      const imports = content.match(importRegex);
      
      if (imports && imports.length > 0) {
        const lastImport = imports[imports.length - 1];
        const lastImportIndex = content.lastIndexOf(lastImport);
        
        if (lastImportIndex !== -1) {
          content = content.slice(0, lastImportIndex + lastImport.length) +
                   '\nimport { logger } from \'@/lib/logger\';' +
                   content.slice(lastImportIndex + lastImport.length);
          modified = true;
        }
      }
    }
    
    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed console logs in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('🔧 Fixing console logs in TypeScript/JavaScript files...\n');
  
  const files = findFiles(srcDir);
  console.log(`Found ${files.length} files to check\n`);
  
  let fixedCount = 0;
  
  files.forEach(file => {
    if (fixConsoleLogs(file)) {
      fixedCount++;
    }
  });
  
  console.log(`\n✅ Fixed console logs in ${fixedCount} files`);
  console.log(`📊 ${files.length - fixedCount} files were already clean`);
  
  if (fixedCount > 0) {
    console.log('\n📝 Summary of changes:');
    console.log('  - console.log → logger.debug');
    console.log('  - console.error → logger.error');
    console.log('  - console.warn → logger.warn');
    console.log('  - console.info → logger.info');
    console.log('  - console.debug → logger.debug');
    console.log('  - Added logger import where needed');
  }
}

main();
