var Tesseract = require('tesseract.js');

const _recognizeImage = (imgUrl) => {
    return new Promise((resolve, reject) => {
        try {
            Tesseract.recognize(imgUrl)
                .progress((p) => {
                    if (p.status === 'recognizing text') {
                        console.info(`Progress: ${(p.progress * 100).toFixed(0)}%`, );
                    }
                })
                .then((result) => {
                    console.log('Result: ', result.text);
                    resolve(result.text);
                })
                .catch((err) => {
                    console.error('Error: ', err);
                    reject(err);
                });
        } catch (error) {
            console.log('Error: ', error);
        }
    });
}

module.exports = {
    recognizeImage: _recognizeImage
}
