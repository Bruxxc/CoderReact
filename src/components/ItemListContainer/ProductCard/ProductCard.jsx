import styles from "./ProductCard.module.css"

import { Link } from "react-router-dom";

const ProductCard = ({producto}) => {

  return (
    <Link className={styles.linkCard} to={`/CoderReact/item/${producto.id}`}> 
        <div className={styles.ProductCard}>
      
          <div className={styles.productImgContainer}> 
          <img className={styles.productImage} src={producto.image} alt="" width={120}/>
          </div>

          <div className={styles.productInfoContainer}>
            <p className={styles.productName}>{producto.title}</p>
            <h4 className={styles.productPrice}>U$S {producto.price}</h4>
          </div>
        </div>
    </Link>

  )
}

export default ProductCard