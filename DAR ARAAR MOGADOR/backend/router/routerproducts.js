const express = require('express');
const Product = require('../module/product');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,path.join(__dirname,"../image"));
    },
    filename : function(req,file,cb){
        cb(null,file.fieldname + "-" + Date.now()+path.extname(file.originalname) );
    }
});

const upload = multer({storage : storage})

router.post('/add',upload.single("image"),async(req,res)=>{
    try {
        data = req.body
        console.log(data);
        pro = new Product(data)
       
        saveproduct = await pro.save()
        console.log(saveproduct);
        res.send(saveproduct)
        
    }
    catch (error) {res.send(error)
        
    }

});
router.get('/getall',async(req,res)=>{

    const allproduct = await Product.find();
    res.json(allproduct);
    console.log(allproduct);

});

router.get('/get/:name',async(req,res)=>{
    try {
        namepro = req.params.name
        pro = await Product.findOne({name:namepro});
        res.status(200).send(pro);
        
    } 
    catch (error) {res.send(error)
        
    }
})
router.put('/update/:id',async(req,res)=>{
    try {
        id=req.params.id
        newdata=req.body
        updateproduct=await Product.findByIdAndUpdate({_id:id},newdata)
        res.send(updateproduct)
    }
    catch (error) {res.send(error)
        
    }
})
router.delete('/delete/:id',async(req,res)=>{
    try {
        id=req.params.id
        deletproduct=await Product.findByIdAndDelete({_id:id})
        res.send(deletproduct)
    }
    catch (error) {res.send(error)
        
    }
})

module.exports=router;