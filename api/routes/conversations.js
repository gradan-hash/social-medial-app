const router = require("express").Router();

const Conversation = require("../models/conversation");


//new conv

router.post("/", async(req,res)=>{
  const newCoversation = new Conversation({
    members:[req.body.senderId, req.body.receiverId]
  });
  try {
    const savedconversation = await newCoversation.save();
    res.status(200).json(savedconversation);
    
  } catch (error) {
    res.status(404).send(500).json(error);
    
  }
})
//get conv of user

router.get("/:userId", async(req,res)=>{
  try {
    const conversation  = await Conversation.find({
      members:{$in:[req.params.userId]},
    });
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json(error)
    
  }
})
module.exports = router;
