import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

setTimeout(() => {
  console.log('window.document  ', window.document);
  Notify.failure('Oops, there is no country with that name');
}, 2000);

// import { fetchCountries } from './fetchCountries';

// const searchInputElem = document.getElementById('search-box');
// const countryListElem = document.querySelector('.country-list');
// const countryInfoElem = document.querySelector('.single-country-info');

// searchInputElem.addEventListener(
//   'input',
//   debounce(async e => {
//     clearInfo();

//     const searchText = e.target.value.trim();
//     if (!searchText) {
//       return;
//     }

//     try {
//       const result = await fetchCountries(searchText);
//       console.log('countries', result); // remove this

//       if (result?.status) {
//         if (result.status === 404) {
//           Notiflix.Notify.failure('Oops, there is no country with that name');
//         } else {
//           Notiflix.Notify.failure('Something went wrong');
//         }
//         return;
//       }

//       if (countries.length === 0) {
//         clearInfo();
//       } else if (countries.length === 1) {
//         displaySingleCountry();
//       } else if (countries.length <= 10) {
//         displayListOfCountries();
//       } else {
//         Notiflix.Notify.info(
//           'Too many matches found. Please enter a more specific name.'
//         );
//       }
//     } catch (err) {
//       console.error('Error happened while fetching list of countries', err);
//       // if (err.s === 404) {

//       // }
//     }
//   }, 300)
// );

// const clearInfo = () => {
//   countryListElem.innerHTML = '';
//   countryInfoElem.innerHTML = '';
// };

// const displaySingleCountry = () => {};

// const displayListOfCountries = () => {};
