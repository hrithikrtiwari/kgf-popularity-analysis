import { useState } from 'react';
import Image from '../src/images/plant.jpg';
import Image2 from "../src/images/plant2.jpg";
import axios from 'axios';
import "./App.css";

var excelPromise = axios.get("http://localhost:8000/");

var mainArray =[];

// resolving the promise
excelPromise
  .then(function (dataArrayValueAsMap) {
    // for (var x = 0; dataArrayValueAsMap.data.length > x; x++) {
        // console.log(dataArrayValueAsMap);
      mainArray= dataArrayValueAsMap.data;
      console.log(mainArray);
    // }
  })
  .catch((err) => console.error("Error fetching the excel file"+ err));



const labels = [
  "Nitrogen",
  "Phosphorous",
  "Potassium",
  "Soil_PH",
];


const Images = [
    Image,
    Image2
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
              </div>
            </div>
            <br />
          </div>
        </div>
      ))}
    </>
  );
};


function App() {
    const [imageIndex,setImageIndex] = useState(0);
  return (
    <div className="">
      <div className="header primary-dark text-center font-header">
        SMART FARMING SYSTEM
      </div>
      <div className="app container-fluid d-flex flex-column-reverse flex-md-row min-vh-100 px-4">
          {/* empty */}
          <div className="col-md-2"></div>
        <div className="col-12 col-md-6 p-4">
          <Combo />
        </div>
        <div className=" p-4 col-12 col-md-4">
            <div className="d-flex flex-column justify-content-around align-items-center  h-50">
                 <div className="name">Plant Suggest</div>
                    <div className="name">
                        <img src={Images[imageIndex]} alt="plant"/>
                    </div>
                    <div className="name glass-btn" style={{"cursor":"pointer"}} onClick={() => setImageIndex(imageIndex+1)}>
                        Next Info
                    </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
