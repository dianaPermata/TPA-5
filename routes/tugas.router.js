const express = require("express");
const router = express.Router();

const {
    getAllTask,
    getTaskByID,
    addTask,
    deleteTaskByID,
    deleteAllTask,
    updateTaskByID,
} = require("../controllers/tugas.controller");

router.get("/", getAllTask);
router.get("/:_id", getTaskByID);
router.post("/:addtask", addTask);
router.delete("/:_id", deleteTaskByID);
router.delete("/", deleteAllTask);
router.patch("/:_id", updateTaskByID);

module.exports = router;
