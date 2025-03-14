// const { RiQqFill } = require("react-icons/ri");
const Post = require("../models/postmodel");

exports.createPost = async (req,res)=>{
   try{
      const {title,body} = req.body;
      const newPost = new Post({
         title,body
      })
      const savedPost = await newPost.save();
      res.status(200).json({
         post : savedPost,
      })
   }
   catch(err){
      res.status(500).json({
         message : "error creating post",
      })
   }
}

exports.getAllPosts = async (req,res)=>{
   try{
      const posts = await Post.find({}).populate("likes").populate("comments").exec();
      res.status(200).json({
         posts,
      })
   }
   catch(err){
      res.status(500).json({
         message: "Error getting posts",
      })
   }
}