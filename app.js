process.removeAllListeners('waring');
const {port, database} = require('./config.js')
const express = require('express')
const app = express()

//Base mongo
const options = {
    autoIndex: false,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMs: 45000,
    family:4,
    useNewUrlParser: true
};

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, x-access-token, content-type, Authorization, auth-token-cadastro');
	next();
});

const mongoose = require('mongoose');
mongoose.connect(database, options);

app.use(express.json());

const routes = require('./routes')(express);
app.use('/api', routes);

console.log(`Api rodando na porta: ${port}`);
app.listen(port)
