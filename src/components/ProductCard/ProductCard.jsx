import styles from "./ProductCard.module.css"
import {AiOutlineDropbox} from "react-icons/ai"
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductCard = (producto) => {
  return (
    <div className={styles.ProductCard}>
      
        <div className={styles.productImgContainer}> 
        <AiOutlineDropbox className={styles.defBox}></AiOutlineDropbox>
        </div>

        <div className={styles.productInfoContainer}>
          <h3>producto.precio</h3>
          <h5>producto.nombre</h5>
          <Button variant="contained" startIcon={<AddShoppingCartIcon />}>Comprar</Button>
        </div>

    </div>
  )
}

export default ProductCard