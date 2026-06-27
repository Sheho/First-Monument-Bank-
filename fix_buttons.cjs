const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/HP/Downloads/grandcapsss/src/views';

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Strip solid backgrounds
    content = content.replace(/\bbg-[a-z]+-\d{2,3}(\/\d+)?\b/g, '');
    // Strip hover backgrounds
    content = content.replace(/\bhover:bg-[a-z]+-\d{2,3}(\/\d+)?\b/g, '');
    // Strip hardcoded paddings and heights for buttons specifically
    // It's safer to just let Button.jsx handle size constraints, but we can remove explicit large heights/paddings.
    // Let's do it inside the Button tag only.
    
    // A simpler approach: use regex to match <Button ... > and clean it
    content = content.replace(/<Button([^>]+)>/g, (match, p1) => {
        let attrs = p1;
        // remove size="lg"
        attrs = attrs.replace(/\bsize="lg"/g, 'size="sm"'); // make them small
        
        // remove big inline classes
        attrs = attrs.replace(/\b(h-10|h-11|h-12|h-14|h-16|h-auto|px-6|px-8|px-10|py-4|py-6|py-8|text-lg|text-xl|w-full)\b/g, '');
        
        // remove solid bg colors
        attrs = attrs.replace(/\bbg-[a-z]+-\d{2,3}(\/\d+)?\b/g, '');
        attrs = attrs.replace(/\bhover:bg-[a-z]+-\d{2,3}(\/\d+)?\b/g, '');
        
        // ensure no multiple spaces
        attrs = attrs.replace(/\s+/g, ' ');
        return `<Button${attrs}>`;
    });

    fs.writeFileSync(filePath, content, 'utf8');
}

function traverse(currentDir) {
    const files = fs.readdirSync(currentDir);
    for (const file of files) {
        const fullPath = path.join(currentDir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            processFile(fullPath);
        }
    }
}

traverse(dir);
console.log('Button classes stripped in views.');

// Also process layouts
traverse('c:/Users/HP/Downloads/grandcapsss/src/layouts');
console.log('Button classes stripped in layouts.');
