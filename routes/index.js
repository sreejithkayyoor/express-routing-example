const routes = require('express').Router();
const models = require('./models');
const cars = require('./cars');
const v1 = require('./v1')

routes.use('/models', models);
routes.use('/cars', cars);
routes.use('/v1', v1)

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.get('/wrapper/api/:identifier/:refNum/folder', (req, res) => {
  res.status(200).json({ message: 'Folder!' + req.params.refNum });
});
routes.get('/wrapper/api/:identifier/:refNum/file', (req, res) => {
  res.status(200).json({ message: 'File!' });
});

module.exports = routes;

