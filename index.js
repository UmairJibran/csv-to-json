//CSV to JSON Converter self developed
//*core requires
const path = require("path");
const fs = require("fs");
const os = require("os");

//*custom modules
const writeToFile = require("./write_to_file.js");

//*Varialbes
const pathToCSV = path.join(__dirname, "customer-data.csv");
const pathToJSON = path.join(__dirname, "customer-data.json");

// runner
async function runner() {
   let csvObject = "";
   //Reading CSV from File!
   await fs.readFile(pathToCSV, { encoding: "utf-8" }, (error, data) => {
      if (error) return console.error(error);
      csvObject += data;
      processCSV(
         csvObject,
         (callback = (jsonObject) =>
            writeToFile(JSON.stringify(jsonObject), pathToJSON)) //*Writting JSON to file!
      );
   });
}

runner();

function processCSV(csv, callback) {
   //*Processed this CSV object, and send JSON Object to callback
   let jsonObject = [];
   csv = csv.split(os.EOL);
   let keys = csv[0].split(",");
   for (let index = 1; index < csv.length - 1; ++index) {
      let tempValues = csv[index].split(",");
      let json = {};
      for (let j = 0; j < keys.length; j++) {
         json[keys[j]] = tempValues[j];
      }
      jsonObject.push(json);
   }
   callback(jsonObject);
}
