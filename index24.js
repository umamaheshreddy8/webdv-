const fs = require('fs');
fs.writeFile('newFile.txt', 'Hello, my name is uma mahehs reddy, iam a big fan of mahehs babu', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File written successfully.');
  });
  