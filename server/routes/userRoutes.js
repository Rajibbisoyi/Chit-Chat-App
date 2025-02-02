const { login,register,getAllUsers,setAvatar,logOut } = require("../controllers/usersControllers");

const router = require("express").Router();

router.post("/register",register);
router.post("/login", login);
router.post("/setavatar/:id", setAvatar);
router.get("/allusers/:id", getAllUsers);
router.get("/logout/:id", logOut);
module.exports = router;
