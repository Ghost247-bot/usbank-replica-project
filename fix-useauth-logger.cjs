const fs = require('fs');

const filePath = './src/hooks/useAuth.tsx';

try {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace all logger calls with console calls temporarily
  content = content.replace(/logger\.error\(/g, 'console.error(');
  content = content.replace(/logger\.log\(/g, 'console.log(');
  content = content.replace(/logger\.info\(/g, 'console.info(');
  content = content.replace(/logger\.warn\(/g, 'console.warn(');
  content = content.replace(/logger\.debug\(/g, 'console.debug(');
  
  fs.writeFileSync(filePath, content);
  console.log('✅ Fixed logger references in useAuth.tsx');
} catch (error) {
  console.error('❌ Error fixing useAuth.tsx:', error.message);
}
