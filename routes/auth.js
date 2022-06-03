const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
  var name = req.query.name;
  console.log(req);
  res.send(name);
});

router.post('/playerRegistration',(req,res)=>{

  var name = req.query.name;
  var nickname = req.query.nickname;
  var password = req.query.password;

  if(name.length !=0){
    res.status(200).send("Player Registration Successfull");
  }
  else{
    res.status(400).send("Player Registration Not Successfull");
  }

});

router.post('/playerRegistration',(req,res)=>{

  var email = req.query.name;
  var password = req.query.password;

  if(email.length !=0){
    res.status(200).send("Email Login SuccessFull");
  }
  else{
    res.status(400).send("Email Doest Get SucessFull Login");
  }
});

module.exports = router;
