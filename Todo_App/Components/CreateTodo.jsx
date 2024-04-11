import { useState } from "react";

 export function CreateTodo(){

    const [title,setTitle]=useState("");
    const [description,setDiscription]=useState("");
    return <div>
        <input type="text" placeholder="title" onChange={((e)=>{
           
           
           const value=e.target.value;                 //This expression retrieves the current value of the input field.
           
            setTitle(e.target.value);
        })}></input> <br />
        <input type="text" placeholder="description" onChange={((e)=>{
            const value=e.target.value;
            setDiscription(e.target.value);
        })}></input> <br />

        <button onClick={()=>{fetch("http://localhost:3000/todo",{
            method:"POST",
            body:JSON.stringify({
                 title:title,
                 description:description
            }),
            headers:{
                "content-Type":"application/json" /*Content-Type: One of the most common
                                                    headers to include is Content-Type. This header tells the server
                                                     what type of content is being sent in
                                                    the request body. For example, if you're sending JSON data,
                                                     you typically set the Content-Type header to application/json.
                                                    This helps the server understand how to parse the request body.*/
            }
        }).then(async(data)=>{
            const inJson=await data.json();
            alert("Todo Added");
        })}}>Add Todo</button>
    </div>
}