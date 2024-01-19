const express = require('express');
const app = express();
require('./config/conect');
app.use(express.json());
const cors = require('cors');

app.use(cors());
const productr = require('./router/routerproducts');
app.use('/product',productr);

const Userr = require('./router/routeruser');
app.use('/users',Userr);

const uploadr = require('./router/Upload');
app.use('/upload',uploadr)



app.listen('4000',()=>{
    console.log('server is run on port 4000');
})