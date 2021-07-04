const mongoose = require("mongoose");


const noteSchema = new mongoose.Schema({
    title : {
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        requires:true,
        maxlength:10000
    },
    user_id : {
        type : String,
        required : true
    }
});

module.exports=mongoose.model("Note",noteSchema);