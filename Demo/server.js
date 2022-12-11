const dotenv = require('dotenv').config();
const express = require('express');
const app= express();


const routes = require('./routes/utente');
const mongoose = require('mongoose');
app.use(express.json());
app.use('/', routes);

mongoose.connect(
    process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);

const listener = app.listen(process.env.PORT|| 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})




