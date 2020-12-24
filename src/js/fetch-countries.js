import errorsNotifications from './pnotify.js';

function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Error');
    })
    .catch(error => {
      errorsNotifications(
        'Nothing was found for your request. Enter the correct country name, please!',
      );
      return error;
    });
}

export default fetchCountries;
