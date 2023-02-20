import styles from "./NavSup.module.css"
import Buscador from "./Buscador/Buscador.jsx"
import CartWidget from "./CartWidget/CartWidget.jsx"
import imgUrl from "../../../assets/img/logo/DynastyLogo.png" 

const NavSup = () => {
  return (
    <div className={styles.NavSup}>
      <img className={styles.dynastyLogo} src={imgUrl} alt="" />
      <Buscador></Buscador>
      <CartWidget></CartWidget>
    </div>
  )
}

export default NavSup