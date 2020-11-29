import './App.css';
import { FormControl, Select, MenuItem, Card, CardContent } from '@material-ui/core';
import { useEffect, useState } from 'react';
import InfoBox from './InfoBox';
import Map from './Map';
import Table from './Table';
import { sortData } from './util';
import LineGraph from './LineGraph';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
    .then(res => res.json())
    .then(data => {
      setTableData(sortData(data));
      setCountries(data.map(item => (
        {
          name: item.country,
          value: item.countryInfo.iso2
        }
      )))
    });
    fetch("https://disease.sh/v3/covid-19/all")
    .then(res => res.json())
    .then(data => {
      setCountryInfo(data);
    });
  }, []);

  const onCountryChange = (e) => {
    const countryCode = e.target.value;
    console.log('countryCode => ' + countryCode);
    setCountry(countryCode);
    const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setCountry(countryCode);
      setCountryInfo(data);
    });
  }

  return (
    <div className="app">
      <div className="app__left">
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
        <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
        <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
        <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />  
        </div>

        <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} />
          <h3>Worldwide new cases</h3>
          <LineGraph />
        </CardContent>
      </Card>

    </div>
  );
}

export default App;
