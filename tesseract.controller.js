var Tesseract = require('tesseract.js');

const _recognizeImage = (imgUrl) => {
    return new Promise((resolve, reject) => {
        Tesseract.recognize(imgUrl)
            .progress((p) => {
                console.info('Progress: ', p.progress * 100);
            })
            .then((result) => {
                console.log('Result: ', result.text);
                resolve(result.text);
            })
            .catch((err) => {
                console.error('Error: ', err);
                reject(err);
            });
    });
}

module.exports = {
    recognizeImage: _recognizeImage
}