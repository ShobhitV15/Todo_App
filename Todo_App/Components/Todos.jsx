export function Todos({todos}){

    function onClickHandler(id){ // tried putting the put method here 
        console.log(id)
                fetch("http://localhost:3000/completed",{
                    method:"PUT",
                    body:JSON.stringify({id:id}),
                    headers:{
                        "content-type":"application/json"
                    }
                }).then(()=>{
                    alert("Task is completed")
                })
                
    }
    return <div>
        {
            
            todos.map((todo)=>{
                return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={onClickHandler(todo._id)} >{todo.completed== true ?"Completed":"Mark as Completed"}</button> 
                    </div>
            })
        }
    </div>
}