const express = require('express');
const router = express.Router();
const User = require('../module/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.post('/register',async(req,res)=>{
    try {
        data = req.body
        users = new User(data)
        cryptPass = bcrypt.hashSync(data.password,(13))
        users.password = cryptPass;
        saveuser = await users.save()
        res.status(200).send(saveuser)
        console.log(data);
    } 
    catch (error) {res.send(error)
        
    }
})
router.get('/get/:id',async(req,res)=>{
    try {
        data = req.params.id
        user = await User.findOne({id:data})
        res.send(user)
    } 
    catch (error) {res.send(error)
        
    }

})
//logine
router.post('/logine',async(req,res)=>{
    try {
        data = req.body
        user = await User.fandOne({email:data.email})
        if(!user){res.status(404).send("Email is not valid")}
        else{
            validPass=bcrypt.compareSync(data.password,user.password)
        }
        if(!validPass){res.status(404).send("Password is not valid")}
        else{payload={
            _id:user.id,
            email:user.eamil,
            name:user.name
        }
        token = jwt.sign(payload,'123456')
        res.status(200).send({mytoken:token})

        }

    } 
    catch (error) {res.send(error)
        
    }
})
module.exports=router;