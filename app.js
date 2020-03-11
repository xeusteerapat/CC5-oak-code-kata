const fs = require('fs');

function writeMultipleFiles(filename, numFiles) {
  for (let i = 1; i <= numFiles; i++) {
    fs.writeFileSync(`${filename}0${i}.js`);
  }
}

writeMultipleFiles('ES6_ex', 33);
