import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Weather from './components/weather';
import WeatherRecords from './components/weatherRecords';


function App() {
  return (
    <div className="App">
      <div className="mt-2 pd-20">
        <h2 className="title" style={{ fontSize: "30px", fontWeight: "800" }}><i className="fa fa-cloud"></i>Weather App</h2>
      </div>
      <WeatherRecords />

    </div>
  );
}

export default App;
