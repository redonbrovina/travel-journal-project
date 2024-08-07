import './App.css'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Data from "./data"

function App() {

  const cards = Data.map((item) => {
    return (
      <Card 
        key = {item.id}
        {...item}
      />
    )
  })

  return (
    <>
      <Navbar/>
      {cards}
    </>
  )
}

export default App
