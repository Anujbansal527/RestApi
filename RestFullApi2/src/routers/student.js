const express=require("express");
//importing schema
const Student = require("../models/students");
//creating new router
const router = new express.Router();

//creating routes


//create a new student adding data to server using post
router.post("/students",(req,res,next)=>{

    console.log(req.body);
            //getting data from server

    const user = new Student(req.body);
        //using promises
    user.save().then(()=>{
        res.status(201).send(user);})
            //status code 
        .catch((err)=>{
        res.status(400).send(err);  });
            //status code
        //adding data to mongodb
        //you must know at a time we have tosend only one res to server
        //res.send("done");
});

/* all data will fetched
//read data from server using get
router.get("/students", async (req,res,next)=>{
    //async and await method
    try{
        const studentData = await Student.find();
            //wait use for waiting    //student from exporting and find method from mongodb
        res.send(studentData);
        }catch(err){
            res.send(err);
        }
})
*/

//read data from server using get (bu using id )
router.get("/students/:id", async (req,res,next)=>{
    //in the place of id we can use name or other parameters
    //async and await method
    try{
        //const _id=req.params;
        const findData = await Student.findById(req.params.id);
                                                //or {_id:_id}
            //wait use for waiting    //find by id
            if(!studentData){
                return res.status(404).send();
            }
            else{
                res.status(200).send(findData);    
            }   
    }catch(err){
        res.status(500).send(err);
    }
});

//updating data from client side to server using patch 
router.patch("/students/:id", async (req,res,next)=>{
    //in the place of id we can use name or other parameters
    //async and await method
    try{
        const _id=req.params.id;
        const updateData = await Student.findByIdAndUpdate(_id,req.body,{
            new:true
            //for fatching new data as out put
        });
                                                //id and updating parameter
                                                //or {_id:_id}
            //wait use for waiting    //find by id and update
            res.status(200).send(updateData);    
    }catch(err){
        res.status(500).send(err);
    }
});

//delete collection(data) using findByIdAndDelete 
router.delete("/students/:id", async (req,res,next)=>{
    //in the place of id we can use name or other parameters
    //async and await method
    try{
        const _id=req.params.id;
        const deleteData = await Student.findByIdAndDelete(_id);
                                                //id
                                                //or {_id:_id}
            //wait use for waiting    //find by id and delete
            if(!_id){
                return res.status(404).send();
            }
            res.status(200).send(deleteData);    
    }catch(err){
        res.status(500).send(err);
    }
});

//exporting our route to use in main file
module.exports = router;