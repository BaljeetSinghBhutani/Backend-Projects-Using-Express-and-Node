const express = require('express');
const app = express();



// load config from new file

require("dotenv").config();
const PORT =  process.env.PORT || 4000;




// middleware to parse json request body
app.use(express.json());
  
// import routes for TODO API
const todoRoutes = require("./routes/todos");

// mount the todo API routes
app.use("/api/v1", todoRoutes);



// start server

app.listen(PORT,()=>{
    console.log(`Server Started at port no:  ${PORT}`);
} )



// connect to the database
const dbConnect = require("./config/database");
dbConnect();


// default route
app.get("/" ,(req, res)=>{
     res.send(`<h1> This is Home Page </h1>`);
})


