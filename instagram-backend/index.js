const express = require("express")
const sequelize = require('./util/database');
const User = require('./models/user')
const Post = require('./models/post')
const Comments = require('./models/comments')
const Likes = require('./models/Likes')

const userRoutes = require('./routes/user')
const postRoutes = require('./routes/post')


const app = express()
const PORT = 8080;


User.hasMany(Post)
Post.hasMany(Comments)
Post.hasMany(Likes)

app.use(express.json());      

app.use('/user',userRoutes)


app.use('/post',postRoutes)


sequelize.sync({force: true}).then(result => {


    app.listen(PORT,()=>console.log(`App is running on PORT ${PORT}`))

    // User.create({username: 'ehsaan2611', name: 'Muhammad Ehsaan',email: "ehsaan",password: "abc"}).then(user=>{
    //     console.log(user)
    //     user.createPost({postDescription: 'This is Post Description', location: 'Lahore'}).then(post=>{
    //         console.log(post)
    //     })
    // })

    // console.log(result)
}).catch(err => {
    console.log(err)
})