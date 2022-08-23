const BASE_URL = 'https://pixabay.com/api/';
const KEY = '29454004-5e5ef32b7401f0e602c44091a';
const SEARCH_FILTER =
  '?key=${KEY}&image_type=photo&orientation=horizontal&safesearch=true';
const refs = {
  searchForm: document.querySelector('#search-form'),
  newGallery: document.querySelector('.gallery'),
  countryInfo: document.querySelector('.btn-form'),
};

fetch(`${BASE_URL}${KEY}/${SEARCH_FILTER}`)
  .then(r => r.json)
  .then(console.log);
