import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
//access to the actual directory
import path from 'path';

const app = express();

//database connection
import mongoose from 'mongoose';
const uri = 'mongodb://localhost:27017/clients';
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(uri, options).then(
    () => {console.log('Connected to MongoDB'); },
    err => { err }
);

//Middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
/*
app.get('/', (req, res)=>{
    res.send('My app');
});
*/
app.use('/api', require('./routes/index'));
app.use('/api', require('./routes/user'));
app.use('/api/login', require('./routes/login'));

///Middleware for Vuejs router history mode
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//Automatic Ports asignation
app.set('port', process.env.PORT || 5000)
app.listen(app.get('port'), () => {
    console.log('Listening to port'+ ' ' + app.get('port'));
});


