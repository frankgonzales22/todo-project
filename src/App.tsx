import React, { useState } from "react"
import { AddItem } from "./Components/AddItem"
import { Display } from "./Components/Display"
import './index.css'

function App() {
  const [item, setItem] = useState("")
  const [title, setTitle] = useState("")

  
  const [todo, setTodo] = useState<{ todo_title: string, todo_item: string, todoId : any }[]>([])

 

  return (
    <>

      {/* {JSON.stringify(todo)} */}
   
      <div className="container">
        <AddItem
          onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          onChangeTextArea={(e: React.ChangeEvent<HTMLTextAreaElement>) => setItem(e.target.value)}
         
          onClickButton={() => setTodo(prev => [
            ...prev,
            { todo_title: title, todo_item: item, todoId : Date.now()},
          ])}      
        />
    
        {todo.map(({ todo_title, todo_item, todoId }) =>
          <Display
            key={todoId}
            display_title={todo_title}
            display_item={todo_item}
            onClickButton={() => setTodo(todo.filter(item => item.todoId !== todoId))
            }
         

          />
        )}
      </div>

    </>
  )
}

export default App
