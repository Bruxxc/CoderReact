import styles from "./Order.module.css"


const Order = ({id,order}) => {
  const redondear=(num)=>{
    return (Math.trunc(num*100)/100);
  }

  const detalles=(order)=>{
    let detalles="";
    order.subordenes.forEach(suborder => {
      detalles=detalles+`${suborder.nombre} x<b>${suborder.cantidad}</b> : <b>U$S ${redondear(suborder.precioTotalProducto)}</b> <br>`
    });
    Swal.fire(detalles);
  }

  return (
    <div className={styles.orderContainer}>
        <p className={styles.orderNum}>{id+1}</p>
        <p>{order.nombre} {order.apellido}</p>
        <p>U$S {redondear(order.precioTotalOrden)}</p>
        <button onClick={()=>{detalles(order)}} className={styles.detallesBoton}>i</button>
    </div>
  )
}

export default Order