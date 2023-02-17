const mongoose = require('mongoose');

const postShema = new mongoose.Schema({
userId:{
  type:String,
  require
},
desc:{
  type:String,
  max:500,

},
img:{
  type:String,

},
likes:{
  type:Array,
  default:[]
},

},{ timestamps:true});

module.exports=mongoose.model("Post", postShema)