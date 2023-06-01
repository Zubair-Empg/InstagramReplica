const Post = require('../models/post')
const Like = require('../models/Likes')
const Comment = require('../models/comments')
const { post } = require('../routes/user')
const User = require('../models/user')



//  ----------------------------- Post Actions ------------------------------------------

const createPost = async (req, res) => {

  try {
    const { postDescription, location, uid } = req.body

    const user = await User.findByPk(uid);

    user.createPost({ postDescription, location }).then(post => {
      console.log(post)
      res.status(200).send({ response: "Post created successfully", post })
    })
      .catch(err => {
        console.log(err)
        res.status(404).send({ message: 'Something went wrong' })
      })



  } catch (error) {
    console.log(error)
    res.status(404).send({ message: 'Something went wrong' })
  }
}

const getPost = (req, res) => {

  try {
    const { id } = req.params;

    Post.findByPk(id).then(result => {
      console.log(result)
      res.status(200).send(result)
    })
      .catch(err => {
        console.log(err)
        res.status(404).send({ response: "Something went wrong" })
      })



  } catch (error) {
    console.log(error)
    res.status(404).send({ message: 'Something went wrong' })
  }

}

const searchPostByLocation = (req, res) => {

  try {
    const { location } = req.params;

    Post.findAll({
      where: {
        location: location
      }
    }).then(result => {
      console.log(result)
      res.status(200).send(result)
    })
      .catch(err => {
        console.log(err)
        res.status(404).send({ response: "Something went wrong" })
      })
  } catch (error) {
    console.log(error)
    res.send({ message: 'Something went wrong' })
  }
}


const getAllPost = (req, res) => {

  try {
    Post.findAll().then(result => {
      console.log(result)
      res.send(result)
    })
      .catch(err => {
        console.log(err)
        res.status(404).send({ response: "Something went wrong" })
      })
  } catch (error) {
    console.log(error)
    res.send({ message: 'Something went wrong' })
  }
}


const getAllPostofUser = (req, res) => {

  const {uid} = req.params

  try {
    Post.findAll({
      where:{
        userId: uid
      }
    }).then(result => {
      console.log(result)
      res.send(result)
    })
      .catch(err => {
        console.log(err)
        res.status(404).send({ response: "Something went wrong" })
      })
  } catch (error) {
    console.log(error)
    res.send({ message: 'Something went wrong' })
  }
}


//  ----------------------------- Comment Post Actions ------------------------------------------

const addComment = async (req, res) => {

  try {

    const { commentDescription } = req.body
    const { postId } = req.params

    const post = await Post.findByPk(postId);

    console.log("Post ID is: " + postId)
    console.log(postId)



    post.createComment({
      commentDescription
    }).then(comment => {
      console.log(comment)
      res.status(200).send({ response: "Comment Added successfully" })
    })
      .catch(err => {
        console.log(err)
        res.status(404).send({ message: 'Something went wrong' })
      })


  } catch (error) {
    console.log(error)
    res.send({ message: 'Something went wrong' })
  }
}

const commentCount = async (req, res) => {
  try {
    const { postId } = req.params

    Comment.findAll({
      where: {
        postId
      }
    }).then(comments =>
      res.status(200).send({ commentCount: comments?.length })
    )
      .catch(err => {
        console.log(err)
        res.status(404).send({ message: 'Something went wrong' })
      })


  } catch (error) {
    console.log(error)
    res.send({ message: 'Something went wrong' })
  }
}

const removeComment = (req, res) => {

  const { id } = req.params;
  try {
    Comment.destroy({
      where: {
        id
      }
    }).then(comment => {
      console.log(comment)
      res.status(200).send({ response: "Comment Deleted successfully" })
    })
      .catch(err => {
        console.log(err)
        res.status(404).send({ response: "Something went wrong" })
      })
  } catch (error) {
    console.log(error)
    res.send({ message: 'Something went wrong' })
  }
}






//  ----------------------------- Like Post Actions ------------------------------------------

const addLike = async (req, res) => {

  try {

    const { likeType } = req.body
    const { postId } = req.params

    const post = await Post.findByPk(postId);


    post.createLike({
      likeType
    }).then(like => {
      console.log(like)
      res.status(200).send({ response: "Like Added successfully" })
    })
      .catch(err => {
        console.log(err)
        res.status(404).send({ message: 'Something went wrong' })
      })


  } catch (error) {
    console.log(error)
    res.send({ message: 'Something went wrong' })
  }
}


const likeCount = async (req, res) => {
  try {
    const { postId } = req.params

    Like.findAll({
      where: {
        postId
      }
    }).then(likes =>
      res.status(200).send({ likeCount: likes?.length })
    )
      .catch(err => {
        console.log(err)
        res.status(404).send({ message: 'Something went wrong' })
      })


  } catch (error) {
    console.log(error)
    res.send({ message: 'Something went wrong' })
  }
}

const removeLike = (req, res) => {

  const { id } = req.params;
  try {
    Like.destroy({
      where: {
        id
      }
    }).then(comment => {
      console.log(comment)
      res.status(200).send({ response: "Like Deleted successfully" })
    })
      .catch(err => {
        console.log(err)
        res.status(404).send({ response: "Something went wrong" })
      })
  } catch (error) {
    console.log(error)
    res.send({ message: 'Something went wrong' })
  }
}




module.exports = { createPost, getAllPost, getPost, searchPostByLocation, addComment, removeComment, addLike, removeLike, likeCount,commentCount, getAllPostofUser };