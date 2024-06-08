const mongoose = require('mongoose');

class Database{
    static async connect() {
        try {
            await mongoose.connect('mongodb://127.0.0.1/food-app');
        }
        catch (err) {
            console.error(err);
        }
    }

    static async disconnect() {
        try {
            await mongoose.disconnect();
        }
        catch (err) {
            console.error(err);
        }
    }
}

module.exports = Database;