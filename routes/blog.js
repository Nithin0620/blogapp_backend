const express = require("express");
const router = express.Router();

const {createPost , getAllPosts} = require("../controllers/postController");
const {likePost, unlikePost ,dummyLink} = require("../controllers/likeController");
const { createComment } = require("../controllers/commentcontroller");



router.get("/dummylink" ,dummyLink );
router.post("/createpost" ,createPost);
router.get("/getallposts" , getAllPosts);
router.post("/likepost",likePost);
router.post("/unlikepost",unlikePost);
router.post("/createcomment",createComment);

module.exports = router;