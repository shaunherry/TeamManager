const controller = require('../controllers/controllers');

module.exports = (app) => {
    app.post('/api/team/new', controller.create);
    app.get('/api/team/roster', controller.readAll);
    app.get('/api/team/:id', controller.readOne);
    app.put('/api/team/edit/:id', controller.updateOne);
    app.delete('/api/team/delete/:id', controller.deleteOne);
}
