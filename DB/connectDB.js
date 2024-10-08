const mongoose = require("mongoose");
 
 async function connectDB(DATABASE_URL){
      try{
        await mongoose.connect(DATABASE_URL)
        console.log('Database Connected!');
      }
      catch(error){
           console.log(error);
      }
}


module.exports = connectDB;