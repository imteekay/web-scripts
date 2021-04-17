const fs = require('fs');
const path = require('path');

const filePath = path.resolve('test.js');
const content = '';

fs.writeFileSync(filePath, content);
