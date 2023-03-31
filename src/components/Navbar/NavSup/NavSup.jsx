import styles from "./NavSup.module.css"
import Buscador from "./Buscador/Buscador.jsx"
import CartWidget from "./CartWidget/CartWidget.jsx"
import imgUrl from "../../../assets/img/logo/DynastyLogo.png" 
import { Link } from "react-router-dom"

const NavSup = () => {

  return (
    <div className={styles.NavSup}>
      <Link to="/CoderReact/"><img className={styles.dynastyLogo} src={imgUrl} alt="" /></Link>
      <Buscador></Buscador>
      <CartWidget></CartWidget>
    </div>
  )
}

export default NavSup