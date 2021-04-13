import React,{useState} from 'react'
import {v4 as uuidV4} from 'uuid'
function Form({input, setInput, todos,setTodo , editTodo , setEditTodo}) {
    const [isHidden , setIsHidden] = useState("")
    const OnInputChange = (event)=>{
        setInput(event.target.value)
        setIsHidden(!isHidden)
    }
    const OnButtonClick = (event)=>{
        if(!event.target.value)
        {

        }
    }
    // const updateTodo = (title , id , completed)=>{
    //     const newTodo = todos.map((todo)=>
    //         todo.id === id ? {title , id , completed}:todo
    //     )
    //     setTodo(newTodo)
    //     setEditTodo("")
    // }
    const onFormSubmit = (event)=>{
        event.preventDefault();
        // if(!editTodo){
            setTodo([...todos , {id:uuidV4() , title : input , completed:false}])
            setInput("")
        // }
        // else{
        //     updateTodo(input , editTodo.id , editTodo.completed)
        // }
    }
    return (
        <form onSubmit={onFormSubmit} className="li-display">
            <input type="text" name ="addItem" className="task-input txt-input" placeholder="enter todo" value={input} onChange={OnInputChange}/>
            <button type="submit" className="button-add "> add</button>
        </form>
    )
}

export default Form
