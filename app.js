const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost:27017/moviesApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Connection Open...')
})
.catch((err)=>{
    console.log('Oh Noo ERROR!!')
    console.log(err)
}) 

const movieSchema = new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:String
});
/*
const amadeus = new Movie({
    title:'Amadeus',
    year:1986,
    score:9.2,
    rating:'R'
});  */
const Movie = mongoose.model('Movie',movieSchema);

Movie.insertMany([
    {   title:'Amadeus2',
    year:1932,
    score:8.5,
    rating:'N'},
    {   title:'Amadeus3',
    year:1991,
    score:5,
    rating:'G'},
    {   title:'Amadeus4',
    year:1851,
    score:10,
    rating:'L'}
])
.then(data=>{
    console.log('it Worked!!');
    console.log(data);
})
