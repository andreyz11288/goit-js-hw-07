// Таск 3 - reduce в insertAdjacentHTML читаеться плохо, разбейте код пофункциям
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const imgEl = document.querySelector('#gallery');
// imgEl.insertAdjacentHTML(
//   'afterbegin',
//   images.reduce((acc, { url, alt }) => {
//     acc += `<li><img src="${url}" alt="${alt}" height = 200
//   /></li>`;
//     return acc;
//   }, ''),
// );
// imgEl.setAttribute('style', 'list-style-type:none; display: flex;');

const createGallery = ({ url, alt }) =>
  `<li><img src="${url}" alt="${alt}" height = 200></li>`;

const galleryEl = images.reduce((acc, item) => acc + createGallery(item), '');

const imgEl = document.querySelector('#gallery');
imgEl.insertAdjacentHTML('afterbegin', galleryEl);
imgEl.setAttribute('style', 'list-style-type:none; display: flex;');
