const express = require("express");
const app = express();
var XLSX = require("xlsx");
var cors = require("cors");
var workbook = XLSX.readFile("../npk-data.xlsx");
var sheet_name_list = workbook.SheetNames;
console.log(sheet_name_list); // getting as Sheet1

var data = [];
var headers = {};
sheet_name_list.forEach(function (sheet_name) {
  var worksheet = workbook.Sheets[sheet_name];
  for (z in worksheet) {
    if (z[0] === "!") continue;
    //parse out the column, row, and value
    var col = z.substring(0, 1);
    // console.log(col);

    var row = parseInt(z.substring(1));
    // console.log(row);

    var value = worksheet[z].v;
    // console.log(value);

    //store header names
    if (row == 1) {
      headers[col] = value;
      // storing the header names
      continue;
    }

    if (!data[row]) data[row] = {};
    data[row][headers[col]] = value;
  }
  //drop those first two rows which are empty
  data.shift();
  data.shift();
  console.table(data);
}); //close forEach

app.use(cors());
app.get("/", function (req, res) {
  res.send(data);
});

app.listen(8000);
