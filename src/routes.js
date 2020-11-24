const { Router } = require('express');

const UserController =  require('./controllers/UserController')
const FinalDriverController =  require('./controllers/FinalDriverController')
const CardController =  require('./controllers/CardController')
const ConductorDriverController =  require('./controllers/ConductorDriverController')


const routes = Router();

routes.get('/users', UserController.index);
routes.get('/users/:email/:password', UserController.getUser);
routes.post('/users', UserController.store);
routes.delete('/users/:user_id', UserController.deleteUser)

routes.post('/finalDrivers', FinalDriverController.store);
routes.get('/finalDrivers', FinalDriverController.index);
routes.get('/finalDrivers/:user_id', FinalDriverController.getFinalDriver);


routes.post('/conductorDrivers', ConductorDriverController.store)
routes.get('/conductorDrivers', ConductorDriverController.index);
routes.get('/conductorDrivers/:user_id', ConductorDriverController.getConductor);

routes.post('/users/:user_id/card', CardController.store);


module.exports = routes;