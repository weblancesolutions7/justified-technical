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
  { from: /text-white/g, to: 'text-light' },
  { from: /text-gray-300/g, to: 'text-gray-soft' },
  { from: /text-gray-400/g, to: 'text-gray-soft' },
  { from: /text-gray-500/g, to: 'text-gray-soft' },
  { from: /border-white\/5/g, to: 'border-brand-dark/10' },
  { from: /border-white\/10/g, to: 'border-brand-dark/20' },
  { from: /border-white\/20/g, to: 'border-brand-dark/30' },
  { from: /bg-darker\/80/g, to: 'bg-darker/80' },
  { from: /bg-darker\/70/g, to: 'bg-darker/70' },
  { from: /bg-darker\/50/g, to: 'bg-darker/50' },
];

filesToProcess.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    replacements.forEach(rule => {
      content = content.replace(rule.from, rule.to);
    });
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
