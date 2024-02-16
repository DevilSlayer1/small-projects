const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port=8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+ '/public/index.html'));
});

app.listen(port,()=>{
    console.log(`server is running at localhost`);
})