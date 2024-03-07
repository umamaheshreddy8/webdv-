const path = require('path');

const filePath = '/path/to/some/file.txt';

// Extracting the directory name
const dirname = path.dirname(filePath);
console.log('Directory:', dirname);

// Extracting the file name
const basename = path.basename(filePath);
console.log('File Name:', basename);

// Joining paths
const fullPath = path.join(__dirname, 'files', 'example.txt');
console.log('Full Path:', fullPath);
