const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

const styleRegex = /<style>([\s\S]*?)<\/style>/;
const scriptRegex = /<script>([\s\S]*?)<\/script>/;

const styleMatch = content.match(styleRegex);
const scriptMatch = content.match(scriptRegex);

if (styleMatch) {
    fs.writeFileSync('css/style.css', styleMatch[1]);
}

if (scriptMatch) {
    let jsContent = scriptMatch[1];
    
    // ADD MIGRATION LOGIC
    const migrationLogic = `
        // MIGRATION: Fix undefined progress/deliverables
        if (appData && appData.milestones && appData.milestones.length > 0 && typeof appData.milestones[0].progress === 'undefined') {
            appData.milestones = DEFAULT_DATA.milestones;
            saveData();
        }
    `;
    
    // Insert migration logic right after JSON.parse
    jsContent = jsContent.replace("if (!appData) {", migrationLogic + "\n        if (!appData) {");
    
    fs.writeFileSync('js/app.js', jsContent);
}

// Replace in HTML
let newHtml = content.replace(styleRegex, '<link rel="stylesheet" href="css/style.css">');
newHtml = newHtml.replace(scriptRegex, '<script src="js/app.js"></script>');

fs.writeFileSync('index.html', newHtml);
console.log("Done splitting files");
