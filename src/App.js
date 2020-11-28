import './App.css';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { useEffect, useState } from 'react';
import InfoBox from './InfoBox';
import Map from './Map';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
    .then(res => res.json())
    .then(data => {
      setCountries(data.map(item => (
        {
          name: item.country,
          value: item.countryInfo.iso2
        }
      )))
    });

  }, []);

  const onCountryChange = (e) => {
    const countryCode = e.target.value;
    console.log('countryCode => ' + countryCode);
    setCountry(countryCode);
  }

  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid-19 dashboard</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country} onChange={onCountryChange} style={{ backgroundColor: 'white' }} >
            <MenuItem key='-1' value='worldwide'>Worldwide</MenuItem>
            {
              countries.map((country, idx) => (
                <MenuItem key={idx} value={country.value}>{country.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </div>

      <div className="app__stats">
      <InfoBox title="Coronavirus Cases" cases="9" total="100" />
      <InfoBox title="Recovered" cases="91" total="200" />
      <InfoBox title="Deaths" cases="933" total="300" />  
      </div>

      <Map />
    </div>
  );
}

export default App;
