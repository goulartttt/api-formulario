const controllers = require('./controllers');

module.exports = (express) => {
    const route = express.Router();
        
    route.post('/blacklist', controllers.blacklist);

    route.get('/coberturas', controllers.coberturas);

    route.post('/cepRestritos', controllers.cepRestritos)

    route.post('/salvarCotacoes', controllers.cotacoes )

    return route

}
