const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Connection Open...')
})
.catch((err)=>{
    console.log('Oh Noo ERROR!!')
    console.log(err)
}) 

const productSchema = new mongoose.Schema({
     name:{
         type:String,
         required:true,
         lowercase:true
     },
     price:{
         type:Number,
         required:true
     },
     onSale:{
         type:Boolean,
         default:false
     },
     categories:[String]
     
});



productSchema.methods.toggleOnSale = function(){
    
    this.onSale=!this.onSale;
    
    return this.save();
}
productSchema.methods.addCategory =function(newCat){
this.categories.push(newCat);
return this.save()
}
productSchema.statics.fireSale= function(){
    return this.updateMany({},{onSale:true,price:0})
}
const Product=mongoose.model('Product',productSchema);

const findProduct = async () => {
    const foundProduct =await Product.findOne({ price:155 });
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategory('outDoor');
    console.log(foundProduct);


}
Product.fireSale().then(res=>console.log(res));

/*const Product=mongoose.model('Product',productSchema);
const bike=new Product({
    name:'Bike monster',
    price:155,
    categories:['cycling','danger']
})
bike.save().then(data=>{
    console.log('it worked!!');
    console.log(data)
}).catch(err=>{
console.log('oh no Error!!');
console.log(err)
})*/