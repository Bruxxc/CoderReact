import React, { useState } from 'react'
import {FaShoppingCart} from "react-icons/fa"
import styles from "./CartWidget.module.css"

const CartWidget = () => {

    const [contador,setContador]=useState(0);

    return (
        <div className={styles.CartWidget}>
            <FaShoppingCart className={styles.sCart}></FaShoppingCart>
            <p className={styles.contador}>{contador}</p>
        </div>
    )
}

export default CartWidget