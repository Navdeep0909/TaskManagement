const express = require("express");
const zod = require("zod");
const {todo} = require("../db");
// const jwt = require("jsonwebtoken");
// const {JWT_SECRET} = require("../config");
// const {authMiddleware } = require("../middleware");

const router = express.Router();

//Zod input validation
const todoBody = zod.object({
    title: zod.string(),
	description: zod.string(),
	status: zod.string()
})

//Create
router.post("/createtodo", async (req, res) => {
    const {success} = todoBody.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"           
        })
    }

    const task = await todo.create({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
    });

    res.json({
        message: "Task created successfully"
    })

})



//Get all the todos
router.get("/bulk", async (req, res) => {
    const todos = await todo.find()

    res.json({
        todos
    })
})


module.exports = router;