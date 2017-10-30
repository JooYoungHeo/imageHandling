const request = require('request');

let imageUrlList = [
  'https://cdn.pixabay.com/photo/2017/10/27/20/25/leopard-2895448_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/10/26/20/00/pumpkin-2892303_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/10/26/23/58/rose-2892821_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/10/20/21/45/adler-2872995_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519_960_720.jpg'
];

for (let i in imageUrlList) {
  let url = imageUrlList[i];
  checkFileSize(url);
}

function checkFileSize(imageUrl) {
  request.head(imageUrl, (err, res, body) => {
    let responseHeaders = res.headers;
    console.log(`-----${imageUrl}`);
    console.log(`content-type: ${responseHeaders['content-type']}`);
    console.log(`content-length: ${responseHeaders['content-length']}`);
  });
}
