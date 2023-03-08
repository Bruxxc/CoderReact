import imgUrl from "../../../assets/img/pagos_icons/Oca.png"
import imgUrl2 from "../../../assets/img/pagos_icons/AE.png"
import imgUrl3 from "../../../assets/img/pagos_icons/MasterCard.png"
import imgUrl4 from "../../../assets/img/pagos_icons/Visa.png"
import imgUrl5 from "../../../assets/img/pagos_icons/Paypal.png"
import styles from "./Pagos.module.css"

const Pagos = () => {
  return (
    <div className={styles.pagos}>
        <img className={styles.Oca} src={imgUrl}/>
        <img className={styles.AE}  src={imgUrl2}/>
        <img className={styles.MasterCard}  src={imgUrl3}/>
        <img className={styles.Visa}  src={imgUrl4}/>
        <img className={styles.Paypal}  src={imgUrl5}/>

    </div>
  )
}

export default Pagos