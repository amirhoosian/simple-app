const express = require('express');
const uuid = require('uuid');
const router = express.Router();

const users = require('../user');


 
 router.get('/user' , (req , res)=>{
 
    res.json(users)
   // res.redirect('/')
 })

 //get single user
 router.get('/user/:id', (req , res)=>{
   const found = users.some(user => user.id ==  req.params.id)
   if(found){
      res.json(users.filter(user => user.id == req.params.id));
   }else{
      res.status(400).json({msg: `user not found width id ${req.params.id}`})
   }
 })

 //create member
router.post('/user' , (req , res)=>{
const newUser = {
   id: uuid.v4(),
   name: req.body.name ? req.body.name : "Not entered",
   email: req.body.email ? req.body.email : "Not entered",
   age: req.body.age ? req.body.age : "Not entered",
   status: 'active', 
   numberphon: req.body.numberphon ? req.body.numberphon : "Not entered",
   address: req.body.address ? req.body.address : "Not entered",
   food: req.body.food ? req.body.food : "Not entered"
   
}

users.push(newUser)
// res.json(users)
res.redirect('/')
})

//update user
router.put('/user/:id', (req, res)=>{
   const found = users.some(user => user.id ==  req.params.id)
   if(found){
      const udateUser = req.body
      users.forEach(user => {
         if(user.id == req.params.id){
            user.name = udateUser.name ? udateUser.name : user.name
            user.age = udateUser.age ? udateUser.age : user.age
            user.numberphon = udateUser.numberphon ? udateUser.numberphon : user.numberphon
            user.address = udateUser.address ? udateUser.address : user.address
            user.food = udateUser.food ? udateUser.food : user.food

            res.json({msg: "user update", users})
         }
      })
     
   }else{
      res.status(400).json({msg: `user not found width id ${req.params.id}`})
   }

})

//delete user
router.delete('/user/:id', (req, res) => {
   const found = users.some(user => user.id ===  parseInt(req.params.id))
   if(found){
      res.json({msg: "user deleted", users: users.filter(user => user.id !== parseInt(req.params.id))});
   }else{
      res.status(400).json({msg: `user not found width id ${req.params.id}`})
   }
})


module.exports = router