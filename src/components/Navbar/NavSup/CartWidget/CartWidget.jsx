import React, { useContext, useState } from 'react'
import {FaShoppingCart} from "react-icons/fa"
import styles from "./CartWidget.module.css"
import CartContext from '../../../../Contexts/CartContext'
import { Link } from 'react-router-dom'
const CartWidget = () => {

    const {carritoNum,setCarritoNum,carritoProducts,setCarritoProducts,total,setTotal}=useContext(CartContext);

    return (
        <Link to={`/CoderReact/Compra`} className={styles.CartWidget}>
                <FaShoppingCart className={styles.sCart}></FaShoppingCart>
                <p className={styles.contador}>{carritoNum}</p>
        </Link>
    )
}

export default CartWidget