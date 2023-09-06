
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
            //provide proper port number if we host our website
require("./db/conn");
            //importing connection usinf their path
const Student = require("./models/students");
                        //path importing student module
//importing router 
const StudentRouter = require("./routers/student");


app.use(express.json());
    //we use this method to fetch json data
    //this is inbuilt method use to recognie the incoming request object as a json object . this method is called as a middleware in your application 


//registering router
app.use(StudentRouter);


app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})