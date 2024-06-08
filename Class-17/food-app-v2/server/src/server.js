const app = require('./app');

const port = 8080;

// IIFE
(() => {
    try {
        app.listen(port, () => {
            console.log(`server running on port ${port}`);
        });
    }
    catch (err) {
        console.error(err);
    }
})();