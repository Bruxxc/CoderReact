import styles from "./NavSup.module.css"
import Buscador from "./Buscador/Buscador.jsx"
import CartWidget from "./CartWidget/CartWidget.jsx"

const NavSup = () => {
  return (
    <div className={styles.NavSup}>
      <img className={styles.dynastyLogo} src="./src/assets/img/logo/DynastyLogo.png" alt="" />
      <Buscador></Buscador>
      <CartWidget></CartWidget>
    </div>
  )
}

export default NavSup