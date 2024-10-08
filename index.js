const express = require("express");
const connectDB= require("./DB/connectDB")
const app = express();
const dotenv = require("dotenv");
const MovieModel = require("./modles/Movies");


dotenv.config();

const port = process.env.PORT || 3001;


connectDB(process.env.DATABASE_URL);

app.use(express.json());

app.post("/release",async function(req,res){

    const name = req.body.name;
    const ratings = req.body.ratings;
    const BoxOffice = req.body.BoxOffice;
    const genre = req.body.genre;
    const isActive = req.body.isActive;
    const comments = req.body.comments;


   const user =  await MovieModel.create({

        name : name,
        ratings : ratings,
        BoxOffice : BoxOffice,
     genre : genre,
     isActive : isActive,
     comments : comments
    })

console.log(user);
    res.json({
        message : "Document Created !"
    })
})
app.post("/top-rated",async function(req,res){

    const name = req.params.name;
    const ratings = req.body.ratings;
    const BoxOffice = req.body.BoxOffice;
    const genre = req.params.genre
    const isActive = req.body.isActive;
    const comments = req.body.comments;


   const user =  await MovieModel.find();

   console.log(user);

   const movie = user.filter((x)=>x.ratings>4.2)




      
    

console.log(movie);
if(!user){
    res.json({
      message : "Movie didn't found!"
    })
}



    res.json({
        movie
    })
})









app.listen(port , ()=>{
    console.log("App is Running on Port "+port);
})