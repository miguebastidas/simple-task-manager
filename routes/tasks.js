const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getOneTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:1").get(getOneTask).patch(updateTask).delete(deleteTask);

module.exports = router;
