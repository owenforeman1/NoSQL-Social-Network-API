const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createNewThought,
  updateThoughtById,
  deleteThoughtById,
  createReaction,
  deleteReaction
} = require("../../controllers/thoughtController");

router.route("/").get(getAllThoughts).post(createNewThought);

router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThoughtById)
  .delete(deleteThoughtById);

router.route("/:thoughtId/reactions").post(createReaction).delete(deleteReaction);

module.exports = router;
