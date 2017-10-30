const fs = require('fs');
const path = require('path');
const request = require('request');

let imageUrlList = [
  'https://cdn.pixabay.com/photo/2017/10/27/20/25/leopard-2895448_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/10/26/20/00/pumpkin-2892303_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/10/26/23/58/rose-2892821_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/10/20/21/45/adler-2872995_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519_960_720.jpg'
];

let dirname = './images';

fs.exists(dirname, flag => {
  if (!flag) fs.mkdirSync(dirname);

  for (let i in imageUrlList) {
    let item = imageUrlList[i];
    let filename = `${convertUrlToFilename(item)}.jpg`;
    let filePath = path.join(dirname, filename);

    downloadImage(item, filePath);
  }
});

function convertUrlToFilename(url) {
  let splitList = url.split('/');
  let last = splitList[splitList.length - 1];

  return last.split('-')[0];
}

function downloadImage(uri, filename) {
  request(uri).pipe(fs.createWriteStream(filename));
  console.log(`${filename} download done`);
}
