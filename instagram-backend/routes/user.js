const express =  require("express")
const userController =  require("../controllers/userController.js");
const router = express.Router();


router.post('/signin',userController.signIn)
router.post('/signUp',userController.signUp)
router.get('/getProfile/:id',userController.getProfile)

module.exports = router