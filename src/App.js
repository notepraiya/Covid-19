import React, { useState, useEffect } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from '@material-ui/core';
import InfoBox from './InfoBox';
import LineGraph from './LineGraph';
import Table from './Table';
import { sortData, prettyPrintStat } from './util';
import numeral from 'numeral';
import Map from './Map';
import 'leaflet/dist/leaflet.css';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#0DD8AB',
      light: '#36DDB8',
      dark: '#3A645B',
      contrastText: '#1A1A1A',
    },
  },
  typography: {
    h1: {
      fontFamily: ['Anton', 'sans-serif'].join(','),
    },
  },
});

const useStyles = makeStyles(theme => ({
  app: {
    fontFamily: ['Anton', 'sans-serif'].join(','),
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: theme.palette.grey.A300,
    padding: 20,
  },
  [theme.breakpoints.down('md')]: {
    app: {
      flexDirection: 'column',
    },
  },
  left: {
    flex: 0.9,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
    '& h1': {
      color: theme.palette.secondary.dark,
      fontSize: '2.5rem',
      fontFamily: ['Yanone Kaffeesatz', 'sans-serif'].join(','),
      fontWeight: 700,
    },
  },
  dropdown: {
    backgroundColor: 'white',
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  right: {
    width: 300,
  },
  information: {
    '& h3': {
      color: theme.palette.secondary.main,
      fontFamily: ['Yanone Kaffeesatz', 'sans-serif'].join(','),
      fontWeight: 700,
      fontSize: '1.4rem',
      marginTop: '1rem',
    },
    '& p': {
      marginTop: '3rem',
    },
  },
  menuItem: {
    fontFamily: ['Yanone Kaffeesatz', 'sans-serif'].join(','),
  },
}));

const App = () => {
  const classes = useStyles();
  const [country, setInputCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState('cases');
  // const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapCenter, setMapCenter] = useState([34.80746, -40.4796]);
  const [mapZoom, setMapZoom] = useState(3);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then(res => res.json())
      .then(data => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/countries')
      .then(res => res.json())
      .then(data => {
        const countries = data.map(country => ({
          name: country.country,
          value: country.countryInfo.iso2,
        }));
        let sortedData = sortData(data);
        setCountries(countries);
        setMapCountries(data);
        setTableData(sortedData);
      });
  }, []);

  const onCountryChange = e => {
    const countryCode = e.target.value;
    const url =
      countryCode === 'worldwide'
        ? 'https://disease.sh/v3/covid-19/all'
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setInputCountry(countryCode);
        setCountryInfo(data);
        console.log('data.countryInfo.lat => ' + data.countryInfo.lat);
        console.log('data.countryInfo.long => ' + data.countryInfo.long);
        //setMapCenter({ lat: data.countryInfo.lat, lng: data.countryInfo.long });
        // setMapCenter([data.countryInfo.lat, data.countryInfo.long]);

        setMapCenter([31.80746, -20.4796]);
        setMapZoom(4);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.app}>
        <div className={classes.left}>
          <div className={classes.header}>
            <h1>COVID-19 Dashboard</h1>
            <FormControl className={classes.dropdown}>
              <Select
                variant="outlined"
                value={country}
                onChange={onCountryChange}
              >
                <MenuItem
                  key={-1}
                  value="worldwide"
                  className={classes.menuItem}
                >
                  Worldwide
                </MenuItem>
                {countries.map((country, idx) => (
                  <MenuItem key={idx} value={country.value}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className={classes.stats}>
            <InfoBox
              onClick={e => setCasesType('cases')}
              title="Coronavirus Cases"
              isRed
              active={casesType === 'cases'}
              cases={prettyPrintStat(countryInfo.todayCases)}
              total={numeral(countryInfo.cases).format('0.0a')}
            />
            <InfoBox
              onClick={e => setCasesType('recovered')}
              title="Recovered"
              active={casesType === 'recovered'}
              cases={prettyPrintStat(countryInfo.todayRecovered)}
              total={numeral(countryInfo.recovered).format('0.0a')}
            />
            <InfoBox
              onClick={e => setCasesType('deaths')}
              title="Deaths"
              isRed
              active={casesType === 'deaths'}
              cases={prettyPrintStat(countryInfo.todayDeaths)}
              total={numeral(countryInfo.deaths).format('0.0a')}
            />
          </div>
          <Map
            countries={mapCountries}
            casesType={casesType}
            center={mapCenter}
            zoom={mapZoom}
          />
        </div>
        <Card className={classes.right}>
          <CardContent>
            <div className={classes.information}>
              <h3>Live Cases by Country</h3>
              <Table countries={tableData} />
              <p></p>
              <h3>Worldwide new {casesType}</h3>
              <LineGraph casesType={casesType} />
            </div>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default App;
