const mongoose = require('mongoose');
const User = mongoose.model('User',{
    firstname:{
        type : String,
        
    },
    lastname:{
        type : String,
        
    },
    mobil:{
        type : String,
        required : true,
        unique : true,
    },
    email:{
        type : String,
        required : true,
        unique : true,
    },
    password:{
        type : String,
        required : true,
    },
});
module.exports=User;