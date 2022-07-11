const express = require('express');
const app = express();
const morgan = require('morgan')
const cors = require('cors')
const history = require('connect-history-api-fallback');

// Settings
app.set('port', 3000)
app.listen(app.get('port'), console.log('Server on port 3000'));


// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


  // Rutas
app.use('/', require('./routes/routes'))

// Middlewars for Vue
app.use(history());
app.use(express.static(__dirname + '/public'))

