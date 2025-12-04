const fs = require('fs');

// Read questions.js
const content = fs.readFileSync('web_app/questions.js', 'utf8');
// Extract the array part
const match = content.match(/const questions = (\[[\s\S]*\]);/);
if (match) {
    const questions = JSON.parse(match[1]);
    const missing = questions.filter(q => !q.correct_answer);
    console.log(`Total questions: ${questions.length}`);
    console.log(`Missing correct_answer: ${missing.length}`);
} else {
    console.log("Could not parse questions.js");
}
