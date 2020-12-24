import refs from './refs.js';
import countries from '../templates/countries.hbs';
import listCountries from '../templates/list-countries.hbs';
import errorsNotifications from './pnotify.js';

const { articlesCountries, listCountriesMarkup } = refs;

function checkResultCountries(res) {
  if (res.length > 10) {
    errorsNotifications('Too short request! Please enter more specific query!');
    return;
  }
  if (res.length > 1) {
    updateListCountriesMarkup(res);
    return;
  }
  if (res.length === 1) {
    updateCountriesMarkup(res);
    return;
  }
}

// рендерится разметка с данными о стране
function updateCountriesMarkup(country) {
  const markup = countries(country);
  articlesCountries.insertAdjacentHTML('afterbegin', markup);
}

//  отображается список имен найденных стран
function updateListCountriesMarkup(countries) {
  const listMarkup = listCountries(countries);
  listCountriesMarkup.insertAdjacentHTML('afterbegin', listMarkup);
}

export default checkResultCountries;
