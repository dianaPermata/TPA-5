const Task = require("../models/Tugas")

module.exports = {
    getAllTask: async (req, res) => {
        try {
            const task = await Task.find({}, "-__v").populate("user", "name")
            res.status(200).json({
                message: "success get data",
                data: task
            })

        } catch (error) {
            res.status(500).json({ message: "Server Error" })
        }
    },

    getTaskByID: async (req, res) => {
        const id = req.params
        try {
            const task = await Task.findById(id);
            res.status(200).json({
                message: "succes get data",
                data: task
            })
        } catch (error) {
            res.status(404).json({
                message: "Could not found"
            })
        }
    },

    addTask: (req, res) => {
        const data = req.body
        const task = new Task(data)
        task.save()

        res.status(201).json({
            message: "task has been created"
        })
    },

    deleteTaskByID: async (req, res) => {
        const id = req.params
        try {
            const task = await Task.findByIdAndDelete(id);
            res.status(200).json({
                message: "Data Deleted",
                data: task
            })
        } catch (error) { }
        res.status(404).json({
            message: "Could not found"
        })
    },

    deleteAllTask: async (req, res) => {
        const id = req.params

        try {
            const task = await Task.deleteMany(id);
            res.status(200).json({
                message: "succes deleted data",
            })
        } catch (error) {
            res.status(400).json({
                message: "failed deleted data"
            })
        }
    },

    updateTaskByID: async (req, res) => {
        try {
          const id = req.params
          const update = req.body
          const option = { new: true };
          const result = await Task.findByIdAndUpdate(id, update, option)
          res.send(result);
    
          res.status(201).json({
            message: "update data succes"
          })
        } catch (error) {
          console.log(error);
          res.status(500).send({
            message: "server error"
          })
        }
      }
    }