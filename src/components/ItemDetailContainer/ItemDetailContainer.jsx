import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import styles from "./ItemDetailContainer.module.css";
import Pagos from "./Pagos/Pagos";
import Rating from "./Rating/Rating";
import { Link } from "react-router-dom";
import CartContext from "../../Contexts/CartContext";
import LogContext from "../../Contexts/LogContext";
const ItemDetailContainer = ({productos}) => {

    const {logged,setLogged,loading,setLoading}=useContext(LogContext);
    const { id } = useParams();
    const [producto,setProducto] = useState(productos.find((producto) => producto.id == id));
    const [cantidad,setCantidad]= useState(0);
    const {carritoNum,setCarritoNum,carritoProducts,setCarritoProducts,total,setTotal}=useContext(CartContext);
   
    
    const agregarAlCarrito=(cantidad)=>{
      if(!logged){
        Swal.fire("Debes iniciar sesión para agregar al carrito").then(()=>{window.location.href="/CoderReact/Login";});
      }
      else{
        let res=carritoProducts.filter(prod=>(prod.id==producto.id));

        if(res.length==0){
          let newprod=producto;
          (newprod.quantity)=parseInt(cantidad);
          setCarritoProducts([...carritoProducts,newprod]);
        }

        else{
          console.log(res[0]);
          let index=carritoProducts.indexOf(res[0]);
          let nuevo=carritoProducts;
          nuevo[index].quantity=parseInt(nuevo[index].quantity) + parseInt(cantidad);
          setCarritoProducts(nuevo);
          console.log(index);

        }
        setTotal(total+(cantidad*producto.price));
        setCarritoNum(parseInt(carritoNum)+parseInt(cantidad));
      }
    }

  return (
    <div className={styles.ItemDetailContainer}>
    <div className={styles.PreDetailImg}>
      <div className={styles.DetailImg}>
        <img src={producto.image} alt="" width={200} />
      </div>
    </div>

    <div className={styles.productInfo}> 
      <Link className={styles.category} to={`/CoderReact/${producto.category}`}><h6>{producto.category}</h6></Link>
      <h3>{producto.title}</h3>
      <h2 className={styles.precio}>U$S {producto.price}</h2>
      <div className={styles.infoSub}>
      <Rating score={producto.rating.rate}></Rating>

      <div className={styles.cantidadContainer}>

        <p>Cantidad</p> <input type="number" value={cantidad} min={0} onChange={e=>{setCantidad(e.target.value)}} className={styles.cantidadInput}/>

      </div>
      
      </div>
      <Pagos></Pagos>
      <button onClick={()=>{agregarAlCarrito(cantidad);}} className={styles.cartButton}>Agregar al carrito</button>
    </div>
    <p className={styles.productDescription}>{producto.description}</p>

  </div>
  )
}

export default ItemDetailContainer