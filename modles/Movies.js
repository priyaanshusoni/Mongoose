const mongoose = require("mongoose");

// Define Schema 

const Schema = mongoose.Schema;


const MovieSchema = new Schema({
    name : {type : String , required : true, trim : true },

    ratings :{type:  Number , required : true , min : 1 , max: 5},
    BoxOffice  : {type : mongoose.Decimal128 , required : true},


    genre : {type : Array},
    isActive : {type : Boolean},

    comments : [
        {
            value : {
                type : String
            },

            published : {
                type : Date , 
                default : Date.now
            }
        }
    ]
 }

)

const MovieModel = mongoose.model('Movies',MovieSchema);


module.exports = MovieModel;