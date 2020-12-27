import './styles.css';
import refs from './js/refs.js';
import fetchCountries from './js/fetch-countries.js';
import updateCountriesMarkup from './js/update-countries-markup.js';
import debounce from 'lodash.debounce';
import errorsNotification from './js/pnotify.js';

const { input, articlesCountries, listCountriesMarkup } = refs;

input.addEventListener('input', debounce(countrySearchInputHandler, 500));
listCountriesMarkup.addEventListener('click', openCountryFromList);

function countrySearchInputHandler(ev) {
  clearArticlesCountries();

  const inputValue = ev.target.value;

  // не делать запрос на АПИ если инпут пустой
  if (!inputValue) return;

  fetchCountries(inputValue).then(updateCountriesMarkup);
}

function openCountryFromList(ev) {
  clearArticlesCountries();

  const elCountry = ev.target.textContent;
  if (!elCountry) return;
  input.value = elCountry;

  fetchCountries(elCountry).then(updateCountriesMarkup);
}

function clearArticlesCountries() {
  articlesCountries.innerHTML = '';
  listCountriesMarkup.innerHTML = '';
}
