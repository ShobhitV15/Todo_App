const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://Shobhit101:Mnisvsoda12@shobhit101.qkgxn83.mongodb.net/")

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo:todo,
}
