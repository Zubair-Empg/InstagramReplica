const User = require('../models/user')


const signIn = (req, res) => {


    try {

        const { username, password } = req.body;

        User.findAll({
            where: {
                username,
                password
            }
        }).then(result => {
            console.log(result)
            if (result?.length > 0) {
                res.status(200).send({ response: 'User is Logined Successfully' })
            }
            else {
                res.send({ message: 'Incorrect username or Password' })
            }
        })
            .catch(err => {
                console.log(err)
                res.send({ message: 'Something went wrong' })
            })
    } catch (error) {
        console.log(error)
        res.send({ message: 'Something went wrong' })
    }


}

const getProfile = (req, res) => {


    try {

        const { id } = req.params;

        User.findByPk(id).then(result => {
            console.log(result)
            if(result === null) {
                res.send({ message: "User not found" })
            }
            else{
                res.status(200).send({ user: result })

            }

        })
            .catch(err => {
                console.log(err)
                res.send({ message: 'Something went wrong' })
            })
    } catch (error) {
        console.log(error)
        res.send({ message: 'Something went wrong' })
    }


}

const signUp = async (req, res) => {



    try {
        const { username, password, cpassword, email, name } = req.body;

        const isUsernameExist = await User.findAll({
            where: {
                username
            }
        })

        console.log(isUsernameExist)
        const isEmailExist = await User.findAll({
            where: {
                email
            }
        })



        if (isUsernameExist?.length > 0)
            res.send({ message: 'Username already Exists' })
        else if (isEmailExist?.length > 0)
            res.send({ message: 'Email already Exists' })
        else if (password != cpassword)
            res.send({ message: 'Password and Confirm Password must be same' })


        else {
            User.create({ username, email, name, password }).then(result => {
                console.log(result)
                res.status(200).send({ response: 'User is Registered Successfully' })
            })
                .catch(err => {
                    console.log(err)
                    res.send({ message: 'Something went wrong' })
                })

        }

    } catch (error) {
        console.log(error)
        res.send({ message: 'Something went wrong' })
    }


}



module.exports = { signIn, signUp, getProfile };