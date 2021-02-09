const db = require("../models");
const path = require("path");

module.exports = (app) => {
    // Getting the index.html file
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    // Getting the exercise.html file
    app.get('/exercise', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    });
    // Getting the stats.html file
    app.get('/stats', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    });
};