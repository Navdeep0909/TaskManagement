const mongoose = require("mongoose");

//Need to add the connection string to connect with the database
mongoose.connect("Please enter you db connection string here")

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String
})

//Create a model for schema
const todo = mongoose.model('Todo', todoSchema);

module.exports = {
    todo,
};