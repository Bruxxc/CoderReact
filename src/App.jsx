import Navbar from './components/Navbar/Navbar'
import ProductCard from './components/ProductCard/ProductCard'
import './App.css'

function App() {

  return (
    <div className="principalDiv">
      <Navbar></Navbar>
      <main>
        <ProductCard />
      </main>
    </div>
  )
}

export default App
