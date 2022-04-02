# Covid-Tracker

View the live version from given link.
https://prateek-covid-tracker.netlify.app/

* **Select from all the major cities of the world** -> **India**, **Australia**, **USA**, **Russia**, **France**, **United Kingdom** more.
* **Tabbed View** for flawless transitions between the screens.
* **Chart.js** for cool and dynamic charts.
* **Google Map** which shows the how much corona virus has affected a particular area.

## About Sonny Sangha

This project is inspired from his project.
He has been coding for over 10 years now. As a Full Stack developer, he has worked both with startups and large corporations to help build & scale their companies. He has now trained thousand's of developers across the globe. Through live coaching sessions on Youtube, He has accumulated several MILLION's of views where he demonstrate how to apply developer skills in a range of cool builds and challenges.

His Webiste - https://www.papareact.com/

## Usage

### JS Applications

This is a React Js. You can install the dependencies and run the app.

<details><summary><b>Show instructions</b></summary>

1. Install the dependencies:

    ```sh
    $ npm install 
    ```

2. Run the app in the android.

    ```sh
    $ npm start
    ```

3. This will start building the project and run the app in browser at localhost:3000.
  
</details>


## Dependencies

* `react-chartjs-2` : "^2.9.0",  React wrapper for Chart.js 2 Open for PRs and contributions!
* `chart.js `: "^2.9.3",  Simple yet flexible JavaScript charting for designers & developers
* `@material-ui/core` : "^4.11.0" MUI provides a robust, customizable, and accessible library of foundational and advanced components
* `axios` : "^0.25.0"  Promise based HTTP client for the browser and node.js
* `react-native-pager-view` : "5.0.12"  For horizontal swipe screen transistion
* `react-native-snap-carousel` : "^3.9.1" For transition between screens.
* `react-native-tab-view` : "^3.0.1"  Dependency for pager-view
* `react-native-web` : "~0.13.12"  Dependency for pager-view


## JS API

```js
fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
    
    
fetch("https://disease.sh/v3/covid-19/countries")
  .then((response) => response.json())
  .then((data) => {
      const countries = data.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2,
      }));
      let sortedData = sortData(data);
      setCountries(countries);
      setMapCountries(data);
      setTableData(sortedData);
    });
    
    
const url =
  countryCode === "worldwide"
    ? "https://disease.sh/v3/covid-19/all"
    : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setInputCountry(countryCode);
      setCountryInfo(data);
      setMapCenter([data?.countryInfo?.lat, data.countryInfo.long]);
      setMapZoom(1);
    });
