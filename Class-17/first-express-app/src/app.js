const express = require('express');
const app = express();

const port = 8080;

// app.use((req, res) => {
//     console.log('Inside my app.use');
//     res.send('SENT YOU THE RESPONSE!');
// })

// http://localhost:8080/healthcheck?name=Sabeel&password=32768
// Endpoint : Http Method + Path

app.get('/cat', (req, res) => {
    res.send('<h1>Meoowww</h1>')
});

app.get('/dog', (req, res) => {
    res.send('<h1>Woof Woof</h1>')
});

app.get('/hello', (req, res) => {
    res.send('<h1>Hello from the server</h1>')
});

app.get('/echo', (req, res) => {
    res.send('<h1>Recived Echo</h1>')
});

app.get('/healthcheck', (req, res) => {
    console.log(req.query);
    res.send('<h1>Recived Healthcheck</h1>')
});

app.get('/products/:productId', (req, res) => {
    // console.log(req.params);
    const { productId } = req.params;
    res.send(`Displaying product with id: ${productId}`);
});

app.listen(port, () => {
    console.log(`Food App server started on port ${port}`);
});