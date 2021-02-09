// Require Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Setting up PORT
const PORT = process.env.PORT || 8080;

// Require Models for DB
const db = require("./models");

// Setting Up and Using Express
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connecting to the DB with Mongoose
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false 
}
);

// Linking to Routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Running the app
app.listen(PORT, () => {
    console.log(`Fitness Tracker is running on port ${PORT}! Access via: http://localhost:${PORT}`)
});

