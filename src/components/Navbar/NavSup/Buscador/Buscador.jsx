import {AiOutlineSearch} from "react-icons/ai"
import styles from "./Buscador.module.css"

function Buscador() {
  return (
    <div className={styles.Buscador}>
        <input type="text" placeholder="Buscar productos, marcas"/>
        <AiOutlineSearch className={styles.searchLogo} />
    </div>

  )
}

export default Buscador