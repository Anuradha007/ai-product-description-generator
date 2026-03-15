const fs = require('fs');
const path = require('path');

console.log('🔍 Checking AI Product Description Generator Setup...\n');

// Check backend files
const backendFiles = [
  'backend/package.json',
  'backend/server.js',
  'backend/.env.example'
];

console.log('📁 Backend Files:');
backendFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);
});

// Check frontend files
const frontendFiles = [
  'frontend/package.json',
  'frontend/public/index.html',
  'frontend/src/index.js',
  'frontend/src/App.js',
  'frontend/src/index.css'
];

console.log('\n📁 Frontend Files:');
frontendFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);
});

// Check root files
const rootFiles = [
  'package.json',
  'README.md',
  '.gitignore'
];

console.log('\n📁 Root Files:');
rootFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);
});

console.log('\n🎉 Setup verification complete!');
console.log('\n📝 Next Steps:');
console.log('1. Add your OpenAI API key to backend/.env');
console.log('2. Run "npm run install:all" to install all dependencies');
console.log('3. Start backend: "npm run start:backend"');
console.log('4. Start frontend: "npm run start:frontend"');
console.log('5. Open http://localhost:3000 in your browser');