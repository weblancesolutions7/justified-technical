const fs = require('fs');
const path = require('path');

const filesToProcess = [
  'src/app/page.tsx',
  'src/app/about/page.tsx',
  'src/app/services/page.tsx',
  'src/app/industries/page.tsx',
  'src/app/contact/page.tsx',
  'src/components/Navbar.tsx',
  'src/components/Footer.tsx',
  'src/components/ServiceCard.tsx',
  'src/components/IndustryCard.tsx',
];

const replacements = [
  { from: /text-light/g, to: 'text-white' },
  { from: /text-gray-soft/g, to: 'text-gray-300' },
  { from: /border-brand-dark\/10/g, to: 'border-white/5' },
  { from: /border-brand-dark\/20/g, to: 'border-white/10' },
  { from: /border-brand-dark\/30/g, to: 'border-white/20' },
];

filesToProcess.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    replacements.forEach(rule => {
      content = content.replace(rule.from, rule.to);
    });
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Reverted ${file}`);
  }
});
