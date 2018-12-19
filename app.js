const express = require('express');
const app = express();
const tesseractController = require('./tesseract.controller');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.post('/read-image', (req, res) => {
    console.log('Body: ', req.body);
    tesseractController
        .recognizeImage(req.body.imgUrl)
        .then((result) => {
            res
                .status(200)
                .send(result)
        });
});

app.listen(port, () => {
    console.log(`OCR Server is listening at ${port}`);
});