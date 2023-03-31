import styles from "./DefaultMenu.module.css"
import ProductCard from "../ItemListContainer/ProductCard/ProductCard";
const DefaultMenu = ({productos}) => {
  console.log(productos);
  
  return (
    <div className={styles.ItemListContainer}>
      <h1>Todos nuestros productos</h1>
        <div className={styles.ProductList}>
          <div className={styles.ProductListSub}>
              {productos.map((product)=>{
                    return<ProductCard key={product.id} producto={product}/>
                })
                }


            </div>
          </div>
    </div>
  )
}

export default DefaultMenu