import styles from "./ItemCheckout.module.css"
import CartContext from "../../../Contexts/CartContext"
import { useContext, useState } from "react";

const ItemCheckout = ({producto}) => {
  const redondear=(num)=>{
    return (Math.trunc(num*100)/100);
  }
  const {carritoNum,setCarritoNum,carritoProducts,setCarritoProducts,total,setTotal}=useContext(CartContext);
  
  const eliminarProducto=()=>{
    let nuevo = carritoProducts.filter(prod=>prod.id!=producto.id);
    setCarritoNum(carritoNum-producto.quantity);
    setTotal(total-producto.quantity*producto.price);
    setCarritoProducts(nuevo);
    
  }

  
  const restarProducto=()=>{
    if(producto.quantity > 1){
      let nuevo = carritoProducts;
      let index = carritoProducts.indexOf(producto);
      nuevo[index].quantity--;
      setCarritoProducts(nuevo);
      setCarritoNum(carritoNum-1);
      setTotal(total-(producto.price));

    }

    else{
    eliminarProducto();

    }
      }

  const sumarProducto=()=>{
    let nuevo = carritoProducts;
    let index = carritoProducts.indexOf(producto);
    nuevo[index].quantity++;
    setCarritoProducts(nuevo);
    setCarritoNum(carritoNum+1);
    setTotal(total+(producto.price));
  }    


  return (
    <div className={styles.itemCheckout}>
        <p className={styles.nombre}>{producto.title} </p>
        <div className={styles.cantidadNum}>
          <button onClick={()=>{restarProducto()}}>-</button>
          <p>x <span className={styles.cantidad}>{producto.quantity}</span> </p>
          <button onClick={()=>{sumarProducto()}}>+</button>
        </div>
        
        <p className={styles.precio}>U$S {redondear((producto.price)*(producto.quantity))}</p>     

      <button onClick={()=>{eliminarProducto()}} className={styles.botonQuitar}>x</button>
    </div>
  )
}

export default ItemCheckout