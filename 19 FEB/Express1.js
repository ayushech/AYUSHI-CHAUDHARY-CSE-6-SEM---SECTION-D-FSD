const express = require('express');
const app = express();
const port = 8080;
app.get('/', (req, res) => {
    res.send('get request to the homepage');
});

app.post('/', (req, res) => {
    res.send('post request to the homepage');
});
app.get('/about', (req, res) => {
    res.send('about page');
});

app.all('*', (req, res) => {
    res.status(404).send('404-page not found');
});

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
});
