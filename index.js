var request = require('request');
var fs = require('fs');

request.post({
  url: 'https://api.remove.bg/v1.0/removebg',
  formData: {
    image_url: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__340.jpg',
    size: 'auto',
  },
  headers: {
    'X-Api-Key': 'SQfsH3CP6CeFieHUng9SA5i5'
  },
  encoding: null
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  fs.writeFileSync("no-bg.png", body);
});