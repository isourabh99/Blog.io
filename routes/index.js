var express = require('express');
var router = express.Router();
const{gethome,getLogin,getSignup}=require("../controllers/indexContoller")
/* GET home page. */
router.get('/', gethome);

/* GET login page. */
router.get('/login',getLogin);

/* GET signup page. */
router.get('/signup',getSignup);




module.exports = router;


