const express = require('express');
const app = express();
const tesseractController = require('./tesseract.controller');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('', (req, res) => {
    res.send('Send a POST request to /read-image. For more information, read the readme.md file at this project. =)');
});

app.post('/read-image', (req, res) => {
    console.log('Body: ', req.body);
    tesseractController
        .recognizeImage(req.body.imgUrl)
        .then((result) => {
            res
                .status(200)
                .send(result)
        })
        .catch((err) => {
            res
                .status(500)
                .send(err);
        });
});

app.get('', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`OCR Server is listening at port ${port}`);
});
