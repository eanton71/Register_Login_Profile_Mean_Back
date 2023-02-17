'use strict'

const usersController = require('../controllers/user.controller');


exports.userRoutes = function(app){
    //FIXME: añadidas rutas desde service angular y funciones de controller
    
    app.post('/api/register-user', usersController.registerUser);
    app.post('/api/login-user', usersController.loginUser);
    
    

    app.put('/api/upload/user-pic',usersController.uploadUserPic);

}
