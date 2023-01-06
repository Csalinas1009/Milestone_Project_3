const router = require("express").Router();
const User = require('../models/userModel')

// create a user

router.post("/", async (req,res) => {
    const newUser = new User(req.body);
    try{
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }catch(err){
        res.status(500).json(err)
    }
})

//get a single User

router.get("/:id", async (req, res)=>{
    try{
        const user = await User.findOne( { _id: req.params,id } );
        res.status(200).json(user);
    }catch(err){
        console.log(err)
        res.status(500).send('err')
    }
})

//get all users

router.get("/", async (req, res) => {
    try{
        const user = await User.find();
        res.status(200).json(user);
    }catch(err){
        console.log(err)
        res.status(500).send('err')
    }
})

//delete

router.delete("/:id", async (req, res)=>{
    try{
        const user = await User.findOneAndDelete( { _id: req.params.id } );
        res.status(200).json(user);
    }catch(err){
        console.log(err)
        res.status(500).send('err')
    }
})

//update pin

router.patch("/:id", async (req, res)=>{
    try{
        const user = await User.findOneAndUpdate( req.params.id, req.body);
        res.status(200).json(user);
    }catch(err){
        console.log(err)
        res.status(500).send('err')
    }
})


module.exports = router;