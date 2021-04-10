// import logo from './logo.svg';
import "./App.css";

const mainArray = [
  {"Nitrogen": 0},
  {"Phosphorous": 0},
  {"Potassium": 0},
  {"Electric Charge": 0},
  {"pH": 0},
  {"Moisture": 0},
  {"Humidity": 0},
];


const Combo = () => {
    return( 
        <>
        {mainArray.map((subArr,index)=> (
         <div className="d-flex w-100 flex-row">
        <div className="info-label">{subArr["Nitrogen"]}</div>
        <div className="inner-label">{index}</div><br/>
        </div>
    ))}
</>
    );
}
function App() {
  return (
    <>
      <div className="header primary-dark text-center font-header">
        SMART FARMING SYSTEM
      </div>
      <div className="container-fluid d-flex flex-column-reverse flex-md-row min-vh-100">
        <div className="col-8 bg-success p-4">
              <Combo/>
          </div>
        <div className="bg-danger p-4"></div>
      </div>
    </>
  );
}

export default App;
