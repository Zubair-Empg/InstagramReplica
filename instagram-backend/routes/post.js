const express =  require("express")
const posts =  require("../controllers/postController.js");
const router = express.Router();


//  ----------------------------- Post APIs ------------------------------------------

router.post('/create',posts.createPost)
router.get('/:id',posts.getPost)
router.get('/search/:location',posts.searchPostByLocation)
router.get('/',posts.getAllPost)
router.get('/getAllPostofUser/:uid',posts.getAllPostofUser)



//  ----------------------------- Comments APIs ------------------------------------------

router.put('/addComment/:postId',posts.addComment)
router.put('/removeComment/:id',posts.removeComment)
router.get('/commentCount/:postId',posts.commentCount)


//  ----------------------------- Likes APIs ------------------------------------------

router.put('/addLike/:postId',posts.addLike)
router.put('/removeLike/:id',posts.removeLike)
router.get('/likeCount/:postId',posts.likeCount)





module.exports = router