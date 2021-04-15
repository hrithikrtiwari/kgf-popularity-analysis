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
          <table border="1" className="w-100">
            <tr className="row">
              <td className="col-1"><b>{labels[0]}</b></td>
              <td className="col-1"><b>{labels[1]}</b></td>
              <td className="col-1"><b>{labels[2]}</b></td>
              <td className="col-1"><b>{labels[3]}</b></td>
              <td className="col-1"><b>{labels[4]}</b></td>
              <td className="col-1"><b>{labels[5]}</b></td>
              <td className="col-1"><b>{labels[6]}</b></td>
              <td className="col-1"><b>{labels[7]}</b></td>
              <td className="col-1"><b>{labels[8]}</b></td>
              <td className="col-1"><b>{labels[9]}</b></td>
            </tr>
            <tr className="row">
              <td className="col-1">{subArray[labels[0]]}</td>
              <td className="col-1">{subArray[labels[1]]}</td>
              <td className="col-1">{subArray[labels[2]]}</td>
              <td className="col-1">{subArray[labels[3]]}</td>
              <td className="col-1">{subArray[labels[4]]}</td>
              <td className="col-1">{subArray[labels[5]]}</td>
              <td className="col-1">{subArray[labels[6]]}</td>
              <td className="col-1">{subArray[labels[7]]}</td>
              <td className="col-1">{subArray[labels[8]]}</td>
              <td className="col-1">{subArray[labels[9]]}</td>
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
