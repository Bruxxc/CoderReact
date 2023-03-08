import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { useEffect,useState } from 'react'
import axios from "axios"
import './App.css'
import { Route,Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import DefaultMenu from './components/DefaultMenu/DefaultMenu'

function App() {
  
  const [productos,setProductos] = useState([]);

  const getProductos = async ()=>{
    const res= await axios.get('https://fakestoreapi.com/products');
    setProductos(res.data);
  }

  useEffect(()=>{
    getProductos();
  },[])

  console.log(productos);
  return (
    <div className="principalDiv">
      <Navbar></Navbar>
      <main>
        <Routes>

        <Route path="/CoderReact/" element={<DefaultMenu></DefaultMenu>}></Route>
        <Route path='/CoderReact/tecnologia' element={<ItemListContainer productos={productos.filter(producto=>producto.category=="electronics")} />}></Route>
        <Route path='/CoderReact/ropahombre' element={<ItemListContainer productos={productos.filter(producto=>producto.category=="men's clothing")} />}></Route>
        <Route path='/CoderReact/ropamujer' element={<ItemListContainer productos={productos.filter(producto=>producto.category=="women's clothing")} />}></Route> 
        <Route path='/CoderReact/accesorios' element={<ItemListContainer productos={productos.filter(producto=>producto.category=="jewelery")} />}></Route> 
        <Route path="*" element={ <h1>404</h1> }></Route>
        <Route path="/CoderReact/item/:id" element={<ItemDetailContainer productos={productos}/>}></Route>
        </Routes>
        
      </main>
    </div>
  )
}

export default App
