var express = require('express');
var router = express.Router();

const passport=require("passport");
const User=require("../models/userModel");

passport.use(User.createStrategy());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});
/* GET signup page. */
router.get("/signup", function (req, res, next) {
  res.render("signup", { title: "Signup" });
});

/* GET signin page. */
router.get("/signin", function (req, res, next) {
  res.render("signin", { title: "Signin" });
});

/* POST signup page. */
router.post("/signupuser", function (req, res, next) {

  const {name,username,email,password}=req.body;
  User.register({name,username,email},password)
  .then(()=>{
 res.redirect("/");
  })
  .catch((err)=>res.send(err));
  // res.json(req.body);
});

/* POST signin page. */
router.post('/signin',passport.authenticate("local",{
  successRedirect:"/signup",
  failureRedirect:"/signin",
}),
 function(req, res, next) {}


//    User.create(req.body).then(()=>{
// res.redirect("/signin")
//    }).catch((err)=>{
//     res.send(err)
//    });
);

module.exports = router;
