//CSV to JSON Converter self developed
//*core requires
const path = require("path");
const fs = require("fs");

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
         (callback = (jsonObject) => {
            //Writting JSON to file!
            console.log(JSON.stringify(jsonObject));
            // !writeToFile(JSON.stringify(jsonObject), pathToJSON);
         })
      );
   });
}

runner();

function processCSV(csv, callback) {
   //TODO: Process this CSV object, and send JSON Object to callback
   let jsonObject = "";
   console.log(csv);
   callback(jsonObject);
}
