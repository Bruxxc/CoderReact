import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { useEffect,useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import DefaultMenu from './components/DefaultMenu/DefaultMenu';
import db from '../db/firebase-config';
import { collection, getDocs } from 'firebase/firestore'
import CartContext from './Contexts/CartContext';
import LogContext from './Contexts/LogContext';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Log/Login';
import Register from './components/Login/Reg/Register';

function App() {
  
  const [logged,setLogged]=useState(("usuario_actual" in localStorage )||("usuario_actual" in sessionStorage));
  const [usuario_actual,setUsuario_actual]=useState("");
  const [categories,setCategories]=useState([]);
  const [items, setItems] = useState([]);
  const itemsCollectionRef = collection(db,"items");
  const usersCollectionRef=collection(db,"users");


  /*LOADING*/
  const [loading,setLoading]=useState(true);

  /*CARRITO*/ 
  
  const [carritoProducts,setCarritoProducts]=useState([]);
  const [carritoNum,setCarritoNum]=useState(0);
  const [total,setTotal]=useState(0);

  
  const getItems = async () => {
    const itemsCollection = await getDocs(itemsCollectionRef);
    setItems(
      itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    )
    setLoading(false);
    ;
  };

 


  const getCategories=()=>{
    let cats=[];

      items.forEach((item)=>{
        if(!cats.includes(item.category)){
         cats.push(item.category);
        }
        setCategories(cats);
      })


  }

  useEffect(()=>{
    getItems();

  },[])
  
  useEffect(()=>{
    getCategories();
  },[items])

  return (
    <CartContext.Provider value={{carritoNum,setCarritoNum,carritoProducts,setCarritoProducts,total,setTotal}}>
      <LogContext.Provider value={{logged,setLogged,loading,setLoading}}>
        <div className="principalDiv">
                  
          <Navbar categories={categories}></Navbar>
          
            <main>

              <Routes>

              
              <Route path="/CoderReact/" element={<DefaultMenu productos={items}/>}></Route>

              {categories.map((category)=>{
                return <Route key={category.indexOf(category)} path={`/CoderReact/${category}`} element={<ItemListContainer productos={items.filter(item => item.category==category)} />}></Route>
              })}

              <Route path="*" element={ <h1>404</h1> }></Route>
              <Route path="/CoderReact/item/:id" element={<ItemDetailContainer productos={items}/>}></Route>
              <Route path="/CoderReact/Compra" element={<Checkout/>}></Route>
              <Route path="/CoderReact/Login" element={<Login />}></Route>
              <Route path="/CoderReact/Register" element={<Register/>} ></Route>
              </Routes>
              
            </main>
          
        </div>
      </LogContext.Provider>
    </CartContext.Provider>
  )
}

export default App
