
const Router = require("express");
const router = Router();
const  {login, signUp, googleLogin} = require("../controllers/authControllers.js");
const  {loginValidation, signUpValidation} = require("../middlewares/authValidation.js");


router.post("/login", loginValidation, login);

router.post("/SignUp", signUpValidation, signUp);
router.get("/google", googleLogin);

module.exports = router; 