const fs = require("fs");

const writeToFile = (data, path) => {
   fs.writeFile(path, data, (error) => {
      if (error) return console.error(error);
      console.log("Data has been written to ", path);
   });
};
module.exports = writeToFile;
