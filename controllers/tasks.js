const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    if (tasks.length == 0) {
      return res.status(204).json({ message: "There is no content" });
    }
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const createTask = async (req, res) => {
  try {
    await Task.create(req.body);
    res.status(201).json(req.body);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getOneTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({ _id: id });
    if (!task) {
      return res.status(204).json({ message: "There is no content" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateTask = (req, res) => {
  res.send("Task Updated");
};

const deleteTask = (req, res) => {
  res.send("Task Deleted");
};

module.exports = {
  getAllTasks,
  createTask,
  getOneTask,
  updateTask,
  deleteTask,
};
