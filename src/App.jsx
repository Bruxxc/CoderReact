import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { useEffect,useState } from 'react'
import axios from "axios"
import './App.css'
import { Route,Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import DefaultMenu from './components/DefaultMenu/DefaultMenu'

function App() {
  
  const [productos,setProductos]=useState([]);
  const [categories,setCategories]=useState([]);

  const getProductos = async ()=>{
    const res= await axios.get('https://fakestoreapi.com/products');
    setProductos(res.data);
  }

  const getCategories=()=>{
    let cats=[];

      productos.forEach((producto)=>{
        if(!cats.includes(producto.category)){
         cats.push(producto.category);
        }
        setCategories(cats);
      })


  }

  useEffect(()=>{
    getProductos();
  },[])
  
  useEffect(()=>{
    getCategories();
  },[productos])

  console.log(productos);
  console.log(categories);
  return (
    <div className="principalDiv">
      <Navbar categories={categories}></Navbar>
      <main>
        <Routes>

        <Route path="/CoderReact/" element={<DefaultMenu></DefaultMenu>}></Route>

        {categories.map((category)=>{
          return <Route path={`/CoderReact/${category}`} element={<ItemListContainer productos={productos.filter(producto => producto.category==category)} />}></Route>
        })}


        <Route path="*" element={ <h1>404</h1> }></Route>
        <Route path="/CoderReact/item/:id" element={<ItemDetailContainer productos={productos}/>}></Route>
        </Routes>
        
      </main>
    </div>
  )
}

export default App
