import React, { useState, memo } from "react";



function App() {

  const [title, setTitle] = useState("Manu1")
  

  function updateTitle() {
    setTitle("My name is "+ Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title} />
      <Header title="Manu2" />
      <Header title="Manu3" />
      <Header title="Manu4" />
      <Header title="Manu5" />
      
    </div>
  )
}


const Header = memo(function Header(props) {
  return <div>
    {props.title}
  </div>
  
  
})

export default App
