const fs = require('fs');
const path = require('path');

const viewsDir = path.join(__dirname, 'src', 'views');
const files = fs.readdirSync(viewsDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  let content = fs.readFileSync(path.join(viewsDir, file), 'utf8');
  let originalContent = content;

  // Make text-6xl responsive
  content = content.replace(/className="([^"]*)\btext-6xl\b([^"]*)"/g, (match, p1, p2) => {
    return `className="${p1}text-4xl md:text-5xl lg:text-6xl${p2}"`;
  });

  // Make text-5xl responsive
  content = content.replace(/className="([^"]*)\btext-5xl\b([^"]*)"/g, (match, p1, p2) => {
    if (match.includes('md:text-5xl') || match.includes('lg:text-5xl')) return match;
    return `className="${p1}text-3xl md:text-4xl lg:text-5xl${p2}"`;
  });

  // Make text-4xl responsive
  content = content.replace(/className="([^"]*)\btext-4xl\b([^"]*)"/g, (match, p1, p2) => {
    if (match.includes('md:text-4xl') || match.includes('lg:text-4xl')) return match;
    return `className="${p1}text-3xl md:text-4xl${p2}"`;
  });

  // Make text-3xl responsive
  content = content.replace(/className="([^"]*)\btext-3xl\b([^"]*)"/g, (match, p1, p2) => {
    if (match.includes('md:text-3xl') || match.includes('lg:text-3xl')) return match;
    return `className="${p1}text-2xl md:text-3xl${p2}"`;
  });

  // Make text-lg responsive
  content = content.replace(/className="([^"]*)\btext-lg\b([^"]*)"/g, (match, p1, p2) => {
    if (match.includes('md:text-lg') || match.includes('lg:text-lg')) return match;
    return `className="${p1}text-base md:text-lg${p2}"`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(path.join(viewsDir, file), content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
