const express = require('express');
const app = express();

const verifyApiKey = (req, res, next) => {
    const { apiKey } = req.query;
    if (apiKey !== 'apple') {
        return res.status(401).send('Invalid API Key');
    }
    return next();
}

app.use((req, res, next) => {
    req.username = "Sabeel";
    console.log('Inside my first middleware');
    return next();
    console.log('Inside my first middleware after calling next');
    // res.send('HIJACKED BY MY APP.USE()');
});

app.use((req, res, next) => {
    console.log('Inside my second middleware');
    next();
})

app.get('/hello', (req, res) => {
    console.log('Inside hello endpoint');
    const { username } = req;
    res.send('Hello ' + username);
});

app.get('/secret',verifyApiKey, (req, res) => {
    res.send('Sometime i wear headphones in public so that i dont have to talk to anyone!');
})

app.listen(3000,()=>{
  console.log('server started at port 3000');
});