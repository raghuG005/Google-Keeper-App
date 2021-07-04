const User = require("../Model/user")
const jwt = require("jsonwebtoken")



exports.isAuthenticate = (req,res,next) => {
    
    try{
        const token = req.headers.authorization.split(' ')[2]
        
        const decode = jwt.verify(token,process.env.SECRET)
        
        

        req.user = decode 
        next()
    }catch(err){
         res.status(403).json({"Message" : "Access Denied, Please LogIn"})
    }
    
}



