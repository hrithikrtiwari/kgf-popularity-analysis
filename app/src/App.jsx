import { useState } from "react";
import Image from "../src/images/plant.jpg";
import Image2 from "../src/images/plant2.jpg";
import axios from "axios";
import "./App.css";
import LoginComponent from "./components/login-component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

var excelPromise = axios.get("http://localhost:8000/");

var mainArray = [];

// resolving the promise
excelPromise
  .then(function (dataArrayValueAsMap) {
    // for (var x = 0; dataArrayValueAsMap.data.length > x; x++) {
    // console.log(dataArrayValueAsMap);
    mainArray = dataArrayValueAsMap.data;
    console.log(mainArray);
    // }
  })
  .catch((err) => console.error("Error fetching the excel file" + err));

const labels = [
  "Tv  Show",
  "Person",
  "Email ID",
  "AGE",
  "Gender",
  "Location",
  "Person",
  "Rating",
  "Comment",
];

const Combo = () => {
  return (
    <>
      {mainArray.map((subArray, index) => (
        <div className="d-flex w-100 flex-row">
          <div className="info-label col-8">{labels[index]}</div>
          <div className="col-4 d-flex justify-content-center align-content-center justify-items-center">
            <div className="wrapper justify-content-center">
              <div className="info-data justify-content-center align-content-center justify-items-center">
                {subArray[labels[index]]}
              </div>{" "}
            </div>
            <br />
          </div>
        </div>
      ))}
      {mainArray.map((subArray, index) => (
        <>
          <table border="1">
            <tr>
              <td>{subArray[labels[0]]}</td>
              <td>{subArray[labels[1]]}</td>
              <td>{subArray[labels[2]]}</td>
              <td>{subArray[labels[3]]}</td>
              <td>{subArray[labels[4]]}</td>
              <td>{subArray[labels[5]]}</td>
              <td>{subArray[labels[6]]}</td>
              <td>{subArray[labels[7]]}</td>
              <td>{subArray[labels[8]]}</td>
              <td>{subArray[labels[9]]}</td>
            </tr>
          </table>
        </>
      ))}
    </>
  );
};

function App() {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <Router>
      <div className="">
        <div className="header primary-dark text-center font-header">
          TV SHOW POPULARITY ANALYSIS
        </div>
      </div>
      <Switch>
        <Route path="/home">
          <Combo />
          <br />
        </Route>
        <Route path="/">
          <LoginComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
