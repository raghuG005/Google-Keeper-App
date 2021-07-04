const router=require('express').Router();


//Auth Controller
const {signUp,signIn,signOut} = require('../Controllers/auth')

//Routes
router.post('/register',signUp)
router.post('/signin',signIn)
router.post('/signout',signOut)


module.exports = router





