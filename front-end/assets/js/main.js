var excelPromise = axios.get("http://localhost:8000/");

// resolving the promise
excelPromise
  .then(function (dataArrayValueAsMap) {
    for (var x = 0; dataArrayValueAsMap.data.length > x; x++) {
      console.log(dataArrayValueAsMap.data[1]);
    }
  })
  .catch(console.error("Error fetching the excel file"));

// da;
// var sheet1 = data[0];

// console.table(data[0]);
