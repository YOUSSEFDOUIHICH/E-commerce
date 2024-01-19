const mongoose = require('mongoose');
const Product = mongoose.model('Product',{
    image:{
        type:String,
    },
    tittel:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    }
    
});
module.exports=Product;