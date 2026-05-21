const fs = require('fs');
const content = fs.readFileSync('Nyewo - Construction Equipment Rentals Elementor Template Kit Preview - ThemeForest.mhtml', 'utf8');
const boundaryMatch = content.match(/boundary="([^"]+)"/);
if (!boundaryMatch) {
  console.log('No boundary');
  process.exit(1);
}
const boundary = boundaryMatch[1];
const parts = content.split('--' + boundary);

let allText = [];
for (let part of parts) {
  if (part.includes('Content-Type: text/html')) {
    let html = part.substring(part.indexOf('\n\n') + 2);
    html = html.replace(/=\r?\n/g, '');
    html = html.replace(/=([0-9A-F]{2})/gi, (match, hex) => String.fromCharCode(parseInt(hex, 16)));
    const textBlocks = html.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi) || [];
    let cleanText = textBlocks.map(t => t.replace(/<[^>]+>/g, '').trim()).filter(t => t.length > 3);
    allText.push(...cleanText);
  }
}
console.log([...new Set(allText)].join('\n').slice(0, 1000));
