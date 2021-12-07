const express =require("express");
const Contest = require("../model/contest.model");
const router = express.Router();

router.post("/",async function(req,res){
    try{
        const contest = await Contest.create(req.body);
        return res.status(200).send(contest);
    }catch(err){
        return res.send("error")
    }
})

router.get("/",async function(req,res){
    try{
        const contest = await Contest.find().lean().exec();
        return res.status(200).send(contest);
    }catch(err){
        return res.send("error")
    }
})

module.exports=router;