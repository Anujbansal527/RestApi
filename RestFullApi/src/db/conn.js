//creating connection
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/studentsDB")
        .then(()=>{
            console.log('Database connected');
        }).catch((err)=>{
            console.error(err);
        });

        