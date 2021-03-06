const fs = require('fs');
const request = require('request');

let imageUrl = 'https://cdn.pixabay.com/photo/2017/10/20/21/45/adler-2872995_960_720.jpg';
let filename = 'adler.jpg';

downloadImage(imageUrl, filename, () => {
  console.log('download image done');
});

function downloadImage(uri, filename, callback) {
  request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
}
