'use strict'

const mongoose = require('../../common/services/mongoose.service').mongoose;


const usersSchema = new mongoose.Schema({
        
    name:{
        type:mongoose.Schema.Types.String
    },
    username:{
        type:mongoose.Schema.Types.String
    },
    user_image:{
        type:mongoose.Schema.Types.String
    },
    email:{
        type:mongoose.Schema.Types.String
    },
    password:{
        type:mongoose.Schema.Types.String
    }

},{versionKey:false})

usersSchema.set('toJSON',{virtuals:false});

const Users = mongoose.model('users',usersSchema,'users');


exports.loginUser = (info)=>{

    return new Promise((resolve,reject)=>{
        //FIXME: añadido findOne
        Users.findOne({$or:[{email:info.eou},{username:info.eou}],password:info.password},{password:0}).exec((error,result)=>{
            
            if(error){
                reject(error.message);
                throw error.message;
                
            }
            
            if (result) {
                //FIXME: añadida respuesta de la consulta en caso afirmativo
                resolve(result);
                console.log(result);
                
            }else{
                resolve(result);
            }
        })

    }).catch(error=>{
        throw error.message;
    })
       
    
}


exports.registerUser = (user)=>{

    try{

        const usr = new Users(user);
        //FIXME: guardar usuario en base de datos
        return usr.save().catch(error => error.message);

    }catch(error){
        throw error.message
    }
       
    
}

exports.updateUserPic = (userid,picname)=>{

    return new Promise((resolve,reject)=>{
        //FIXME: añadido Coleccion USers antes de la fucnion y parametros userid en   id: y picname en   user_image:
        Users.findOneAndUpdate({ _id: userid }, {$set: { user_image: picname }},{new:true}).exec((error,user)=>{
         
            if (error) { 
                reject(error.message);
                throw error.message;
                
            }
            
            if (user) { 
                //FIXME: añadida resolucion afirtmativa de consulta de modificacion
                 resolve(user);
            }else{
                resolve(undefined);
            }
        })

    }).catch(error=>{
        throw error.message;
    })
       
    
}
 