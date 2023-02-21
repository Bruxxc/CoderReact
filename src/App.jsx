import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {

  return (
    <div className="principalDiv">
      <Navbar></Navbar>
      <main>
        <ItemListContainer greeting="hola!" />
      </main>
    </div>
  )
}

export default App
