'use strict'

const usersController = require('../controllers/user.controller');


exports.userRoutes = function(app){
    
    app.post('',usersController);
    
    app.post('',usersController);

    app.put('',usersController);

}
