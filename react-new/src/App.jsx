import Message from "./Message"
import "./App.css"

function Mybutton(){
  return (
    <button>
      I'm a Button
    </button>
  )
}
function App(){
  return (
    <div className="main-cont">
      <Message></Message>
      <Mybutton></Mybutton>
    </div>
  )
}

export default App
