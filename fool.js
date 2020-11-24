const express=require('express');
const app =express();
const path =require('path');

const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Mongo Connection Open...')
})
.catch((err)=>{
    console.log('Oh Noo Mongo can\'t connect ERROR!!')
    console.log(err)
}) 

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.get('/dog',(req,res)=>{
    res.send('Woof')
})
app.listen(3000,()=>{
console.log('app listening port 3000!!')
})