import { useState } from "react"
import { AddItem } from "./Components/AddItem"
import { Display } from "./Components/Display"
import './index.css'

function App() {
const [item, setItem] = useState("")
const [title, setTitle] = useState("")

// const print = () => {
//   console.log(e.target.value)
// }

  return (
    <>
    {<h1>TITLE : </h1>} {JSON.stringify(title)}
    <br />
    {<h2>ITEM : </h2>} {JSON.stringify(item)}
      <div className="container">
        <AddItem 
        onChangeInput={(e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} 
        onChangeTextArea={(e:React.ChangeEvent<HTMLTextAreaElement>) => setItem(e.target.value)}/>
        <Display />
      </div>
    </>
  )
}

export default App
