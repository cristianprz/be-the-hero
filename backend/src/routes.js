const express = require('express');

const OngControlller = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController'); 
const ProfileController = require('./controllers/ProfileControler');
const SessionController = require('./controllers/SessionController');
 
const routes = express.Router();


routes.post('/sessions', SessionController.create);

routes.get('/ongs',OngControlller.index);
routes.post('/ongs',OngControlller.create);

routes.get('/profile',ProfileController.index);

routes.post('/incidents',IncidentController.create);
routes.get('/incidents',IncidentController.index);
routes.delete('/incidents/:id',IncidentController.delete);

module.exports = routes;