import styles from "./ItemListContainer.module.css"
import {AiOutlineDropbox} from "react-icons/ai"
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemListContainer = (props) => {
  return (
    <div className={styles.ProductCard}>
      
        <div className={styles.productImgContainer}> 
        <AiOutlineDropbox className={styles.defBox}></AiOutlineDropbox>
        </div>


        <div className={styles.productInfoContainer}>
          <p className={styles.greeting}>{props.greeting}</p>
          <Button variant="contained" startIcon={<AddShoppingCartIcon />}>Comprar</Button>
        </div>

    </div>
  )
}

export default ItemListContainer