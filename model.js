const sharp = require('sharp');

sharp('linearRegression1.jpg')
  .resize(400, 300)
  .toFile('resized_linearRegression1.jpg', (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Image resized successfully!');
    }
  });