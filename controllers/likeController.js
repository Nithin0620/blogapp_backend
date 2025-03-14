const Post = require("../models/postmodel");
const Like = require("../models/likemodel");

exports.likePost = async (req,res)=>{
   try{
      const {post,user} = req.body;
      const newlike= new Like({
         post,user
      })
      const savedLike = await newlike.save();
      const updatedPost = await Post.findByIdAndUpdate(post, {$push :{likes : savedLike._id}}, {new:true})
      .populate("likes").exec();
      res.status(200).json({
         post : updatedPost,
      })
   }
   catch(e){
      res.status(500).json({
         message : "Error creating like",
      })

   }
}


exports.unlikePost = async (req,res)=>{
   try{
      const {post,like} = req.body;
      const deletedLike = await Like.findOneAndDelete({post:post , _id:like});
      const updatedPost = await Post.findByIdAndUpdate(post , {$pull : {likes:deletedLike._id}},{new:true});
      res.status(200).json({
         post : updatedPost,
      })
   }
   catch(e){
      res.status(500).json({
         message : "Error deleting like",
      })
   }
}

exports.dummyLink = (req,res) => {
   res.send("This is your Dummy Page");
};