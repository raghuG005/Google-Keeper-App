const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
       
    username : {
        type : String,
        require : String,
        trim : true
    },
    email : {
        type : String,
        require : String,
        trim : true
    },
    encrypt_password : {
        type : String,
        require : String,
    }

})

module.exports = mongoose.model("User",UserSchema)