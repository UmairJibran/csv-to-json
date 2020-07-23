//CSV to JSON Converter via npm package csvtojson
//requiring core package
const path = require("path");
//requiring npm package
const csv = require("csvtojson/v2");
//requiring custom modules
const writeToFile = require("./write_to_file.js");
//runner
async function runner() {
   const csvFilePath = "./customer-data.csv"; //defining path till the file
   let jsonObj = await csv().fromFile(csvFilePath);
   writeToFile(
      JSON.stringify(jsonObj),
      path.join(__dirname, "customer-data.json")
   );
}

runner();
