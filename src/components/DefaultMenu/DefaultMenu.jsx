import styles from "./DefaultMenu.module.css"
import ProductCard from "../ItemListContainer/ProductCard/ProductCard";
import LogContext from "../../Contexts/LogContext";
import { Skeleton } from "@mui/material";
import { useContext } from "react";

const DefaultMenu = ({productos}) => {
  const {logged,setLogged,loading,setLoading}=useContext(LogContext);

  return (
    <div className={styles.ItemListContainer}>
      <h1>Todos nuestros productos</h1>
        <div className={styles.ProductList}>
          <div className={styles.ProductListSub}>
            {(loading)?(
              <div className={styles.ProductListSub}>
                <Skeleton variant="rectangular" width={220} height={320}></Skeleton>
                <Skeleton variant="rectangular" width={220} height={320}></Skeleton>
                <Skeleton variant="rectangular" width={220} height={320}></Skeleton>
                <Skeleton variant="rectangular" width={220} height={320}></Skeleton>
                <Skeleton variant="rectangular" width={220} height={320}></Skeleton>
                <Skeleton variant="rectangular" width={220} height={320}></Skeleton>        
                <Skeleton variant="rectangular" width={220} height={320}></Skeleton>
                <Skeleton variant="rectangular" width={220} height={320}></Skeleton>
              </div>
            ):
            (productos.map((product)=>{
                    return<ProductCard key={product.id} producto={product}/>
                })
                )}



            </div>
          </div>
    </div>
  )
}

export default DefaultMenu