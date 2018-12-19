const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/read-image', (req, res) => {
    console.log('Body: ', req.body);
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`OCR Server is listening at ${port}`);
});
