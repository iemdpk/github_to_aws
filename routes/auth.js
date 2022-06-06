const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();
var mysql = require('mysql');
const {connect, con} = require('../mysqlConnect');

router.get('/',(req,res)=>{
  res.send("Please pass the variable");
});

router.post('/playerRegistration',(req,res)=>{

  var name = req.query.name;
  var nickname = req.query.nickname;
  var password = req.query.password;

  if(name.length !=0){
  con.query("INSERT INTO `registration` (`id`, `email`, `nickname`, `password`) VALUES (NULL, '"+name+"', '"+nickname+"', '"+password+"');",(err,result,field)=>{
    var response_code = {status:"200",res_msg:"Player Registratration Successfull"};
    res.status(200).send(response_code);
  });
  }
  else{
    var response_code = {status:"400",res_msg:"Player registration not enter"};
    res.status(400).send(response_code);
  }

});

router.post('/login_player',(req,res)=>{

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
