const axios = require('axios');

axios.get('https://ts-covid-api.vercel.app/api/summary').then(res => {
  console.log(res);
});

interface b {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
}
