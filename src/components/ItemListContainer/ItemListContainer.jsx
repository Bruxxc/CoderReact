import styles from "./ItemListContainer.module.css"

import ProductCard from "./ProductCard/ProductCard";

const ItemListContainer = ({productos}) => {
  

  return (
   <div className={styles.ItemListContainer}>
    <h1>{productos[0].category}</h1>
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

export default ItemListContainer