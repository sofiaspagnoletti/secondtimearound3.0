var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var StockSchema = new Schema({

    itemName:{
        type: String,
        required: true
    },
    //Foreign reference to UserData table
    user_id:{
        required:true
    },
    category:{
        type:String,
        required:true
    },
    quantity:{
        type:Number
    },
    claimed:{
        type:Boolean
    },
    url:{
        type:String
    }

});

var StockData = mongoose.model("StockData", StockSchema);

module.exports = StockData;