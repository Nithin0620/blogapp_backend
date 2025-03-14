const Post = require("../models/postmodel");
const Comment = require("../models/commentmodel");

exports.createComment = async (req,res)=>{
   try{
      const {post , user , body} = req.body;
      const newcomment = new Comment({
         post,user,body
      });
      const savedComment = await newcomment.save();

      const updatedPost = await Post.findByIdAndUpdate(post,{ $push :{comments : savedComment._id}},{new:true})
                        .populate("comments").exec();

      res.status(200).json(
        { post : updatedPost}
      );
   }
   catch(err){
      res.status(500).json({
         message:"Error creating comment",
      })
   }
}