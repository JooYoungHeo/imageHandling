const fs = require('fs');
const request = require('request');

let imageUrl = 'https://cdn.pixabay.com/photo/2017/10/27/20/25/leopard-2895448_960_720.jpg';
let filename = 'leopard.jpg';

downloadImage(imageUrl, filename, () => {
  console.log('download image done');
});

function downloadImage(uri, filename, callback) {
  request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
}
