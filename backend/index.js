const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();

// Conexión base de datos
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/clients';
const options = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };

// Or using promises
mongoose.connect(uri, options).then(
    () => { console.log('Connected to MongoDB') },
    err => { console.log(err) }
);

//Middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Defining routes
// app.get('/', (req, res) => {
//     res.send('My express server')
// });

//routes
app.use('/api', require('./routes/contract'));
app.use('/api', require('./routes/client'));
app.use('/api/login', require('./routes/login'));

//Middleware for implementing Vue.js router history mode
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));


//Defining port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('http://localhost:' + port);
})