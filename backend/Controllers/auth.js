const User = require('../Model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


exports.signUp = (req,res)  => {

    bcrypt.hash(req.body.password,8,(err,hashpassword) => {
        
        if(err) return res.status(403).json({"Error" : "Error while hashing"});

        const user = new User ({        
            username : req.body.username,
            email : req.body.email,
            encrypt_password : hashpassword        
        });

        user.save((err,userData) => {
            if(err) return res.status(403).json({"Error" : "Error while saving a Data"});
            
            return res.status(200).json({"Message" : "User Registration Completed Successfully"})
        });


    });
}


exports.signIn = (req,res) => {
       
       User.findOne({email : req.body.email},(err,user) => {

        if(err) return res.status(403).json({"Error" : "No user founds"});

        bcrypt.compare(req.body.password,user.encrypt_password,(err,result) => {

            if(err) return res.status(403).json(err);
            
            else if (result) {

                let token = jwt.sign({id : user._id ,name : user.name},process.env.SECRET)
                return res.status(200).json({
                    username : user.username,
                    message : "LogIn Successfully",
                    token
                });
            }

        });


       });
}

exports.signOut = (req,res) => {}