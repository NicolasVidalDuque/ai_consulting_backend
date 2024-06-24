const fs = require('fs');
const path = require('path');

function saveResponse(response) {
  const filePath = path.join(__dirname, 'response.json');
  fs.writeFileSync(filePath, JSON.stringify(response, null, 2), 'utf-8');
  console.log(`Response saved to ${filePath}`);
}

module.exports = saveResponse;
