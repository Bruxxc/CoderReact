import { useParams } from "react-router-dom";
import { useState } from "react";
import styles from "./ItemDetailContainer.module.css";
import BotonComprar from "./BotonComprar/BotonComprar";
import BotonCarrito from "./BotonCarrito/BotonCarrito";
import Pagos from "./Pagos/Pagos";
import Rating from "./Rating/Rating";
import { Link } from "react-router-dom";

const ItemDetailContainer = ({productos}) => {
    const { id } = useParams();
    const [producto,setProducto] = useState(productos.find((producto) => producto.id == id));
    let cat;

    switch(producto.category){
      case "electronics":
        cat="tecnologia";
        break;

      case "men's clothing":
        cat="ropahombre";
        break;
      
      case "women's clothing":
        cat="ropamujer";
        break;
      
      case "jewelery":
        cat="accesorios";
        break;
    } 

  return (
    <div className={styles.ItemDetailContainer}>
    <div className={styles.PreDetailImg}>
      <div className={styles.DetailImg}>
        <img src={producto.image} alt="" width={200} />
      </div>
    </div>

    <div className={styles.productInfo}> 
      <Link className={styles.category} to={`/CoderReact/${cat}`}><h6>{producto.category}</h6></Link>
      <h3>{producto.title}</h3>
      <h2 className={styles.precio}>U$S {producto.price}</h2>
      <Rating score={producto.rating.rate}></Rating>
      <Pagos></Pagos>
      <BotonComprar></BotonComprar>
      <BotonCarrito></BotonCarrito>
    </div>
    <p className={styles.productDescription}>{producto.description}</p>

  </div>
  )
}

export default ItemDetailContainer