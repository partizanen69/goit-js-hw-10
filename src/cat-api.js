import axios from 'axios';

export const fetchBreeds = () => {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(result => {
      return result.data;
    })
    .catch(err => {
      console.error(err);
    });
};

export const fetchCatByBreed = breedId => {
  const urlParams = new URLSearchParams({
    breed_ids: breedId,
  });
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?${urlParams}`)
    .then(result => result.data[0])
    .catch(err => {
      console.error(err);
    });
};
