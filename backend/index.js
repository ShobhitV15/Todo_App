const express=require('express');
const { createTodo } = require('./types');
const {todo} = require('./db');
const cors=require('cors');

const app=express();

app.use(express.json());
app.use(cors({
    orgion:"http://localhost:5176/" // this only allows this frontend to hit the server
}
)); // this backend is sligthly insecure now any frontend can hit this backend

app.get("/todos",async(req,res)=>{
const todos=await todo.find();
res.json({
    todos
})

})

app.post("/todo",(req,res)=>{
    const createPayLoad=req.body;
    const parsedPayLoad=createTodo.safeParse(createPayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg:"You sent the wrong input"
        })
        return;
    }
   todo.create({
    title:createPayLoad.title,
    description:createPayLoad.description,
    completed:false
   }).then(()=>{
    res.json({
        msg:"Todo dataBase added"
    })
   })


})

app.put("/completed", async (req, res) => {
    const todoId = req.body.id;
    if (!todoId) {
        return res.status(400).json({ msg: "Todo ID is required in the request body" });
    }

    try {
        const updatedTodo = await todo.findByIdAndUpdate(todoId, { completed: true });   // this function finds the id and updates it
        if (!updatedTodo) {
            return res.status(404).json({ msg: "Todo not found" });
        }
        res.json({ msg: "Todo marked as done" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
});


app.listen(3000);