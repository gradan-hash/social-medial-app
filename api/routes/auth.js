const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

//register
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(15);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});


//login

router.post("/login", async(req, res) => {

try {
  const user = await User.findOne({email:req.body.email});
  
  !user && res.status(404).send("user not found");

  const validpassword= await bcrypt.compare(req.body.password, user.password);

  !validpassword && res.status(400).send("wrong password");

  res.status(200).json(user);

}catch(err){
  console.log(err);
}
}

)
module.exports = router;
