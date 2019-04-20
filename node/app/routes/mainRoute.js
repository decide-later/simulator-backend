'use strict';
module.exports = function(app) {
  var actions = require('../controllers/mainController');

    // todoList Routes
    app.route('/')
        .get(actions.get_activities);
        //.post(todoList.create_a_task);
    app.route('/view/')
        .get(actions.current_view)
};
