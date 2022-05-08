const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend
} = require("../../controllers/userController");

router.route("/").get(getAllUsers).post(createNewUser);

router.route("/:userId").get(getUserById).put(updateUserById).delete(deleteUserById);

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
