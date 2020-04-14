const express = require('express');
const morgan = require('morgan');
const env = require('dotenv');

//Load env
env.config({path: './config.env'})
const app = express();

//Dev logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//Profile routes
app.use('/api/v2/profile/', require('./routes/profile'));


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server has been started in ${process.env.NODE_ENV} mode on port ${port}`));
