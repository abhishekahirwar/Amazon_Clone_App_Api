// IMPORTS FROM PACKAGES
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// IMPORTS FROM OTHER FILES
const authRouter = require('./routes/auth');

// INIT
const PORT = process.env.PORT || 3000;
const app = express();

// middleware
app.use(express.json());
app.use(authRouter);

// Connections
mongoose.connect("mongodb+srv://innocentboyabhi1234:kyahikrlogepasswordjaanke@cluster4.gtm1z02.mongodb.net/amazondb").then(() => {
    app.use(cors({ origin: "*" }));
    console.log('Database connect Successfully');
})
    .catch((e) => {
        console.log(e);
    });


app.listen(PORT, () => {
    console.log(`connected at port: ${PORT}`);
});
