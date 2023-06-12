const Todo = require('../models/Todo');


// define the route handler 


exports.getTodo = async (req, res) => {
    try {
        // extract title and description from request body

        // fetch all the todo items from the database
        const todos = await Todo.find({});



        // response 
        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire Todo has been fetched",
        });

    }

    catch (err) {
        console.error(err);
        res.status(500).json({

            success: false,
            error: err.message,
            message: "Server Message",
        });
    }

}

exports.getTodoById = async (req, res) => {
    try {
        // extract todo items basis on id
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id });

        // data for given id is not found
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No data found for given id"



            })
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: `Entire data with given id ${id} has been fetched`
        })



    }
    catch (err) {
        console.error(err);
        res.status(500).json({

            success: false,
            error: err.message,
            message: "Server Message",
        });
    }

}