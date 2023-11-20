import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

axios.defaults.headers.common['x-api-key'] =
  'live_RrA3pIaH06HzHv054rOs33bCr34aVdRpxjMyoyzpzwwOrm6g7CFAqmHjmHRs5KvA';

const selectElem = document.querySelector('.breed-select');
const loadingElem = document.querySelector('.loader');
const catInfoElem = document.querySelector('.cat-info');
const errorElem = document.querySelector('.error');

let cats = [];

fetchBreeds()
  .then(breeds => {
    fillSelectWithOptions(breeds);
    show(selectElem);
  })
  .catch(err => {
    show(errorElem);
  })
  .finally(() => {
    hide(loadingElem);
  });

const fillSelectWithOptions = cats => {
  let options = '';
  for (const cat of cats) {
    options += `<option value=${cat.id}>${cat.name}</options>`;
  }
  selectElem.innerHTML = options;
};

selectElem.addEventListener('change', e => {
  show(loadingElem);
  hide(catInfoElem);
  hide(errorElem);
  selectElem.disabled = true;

  fetchCatByBreed(e.target.value)
    .then(cat => {
      console.log('cat', cat);
      const breed = cat.breeds[0];

      const catMarkup = `
      <img src="${cat.url}" width="400" />
      <div>
        <h2>${breed.name}</h2>
        <p>${breed.description}</p>
        <p><b>Temperament</b>: ${breed.temperament}</p>
      </div>
    `;

      catInfoElem.innerHTML = catMarkup;

      show(catInfoElem);
    })
    .catch(err => {
      show(errorElem);
    })
    .finally(() => {
      hide(loadingElem);
      selectElem.disabled = false;
    });
});

const hide = elem => {
  elem.classList.add('hidden');
};

const show = elem => {
  elem.classList.remove('hidden');
};
