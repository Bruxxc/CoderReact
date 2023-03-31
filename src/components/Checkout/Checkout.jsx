import styles from "./Checkout.module.css"
import { useContext, useEffect, useState } from "react"
import CartContext from "../../Contexts/CartContext"
import ItemCheckout from "./ItemCheckout/ItemCheckout"
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import LogContext from "../../Contexts/LogContext";
import db from "../../../db/firebase-config";
import { addDoc, collection } from "firebase/firestore";

const Checkout = () => {


  const {logged,setLogged,loading,setLoading}=useContext(LogContext);
  const {carritoNum,setCarritoNum,carritoProducts,setCarritoProducts,total,setTotal}=useContext(CartContext);
  const ordersCollectionRef=collection(db,"orders");
  const [user,setUser]=useState("");


  ///REDONDEAR///
  const redondear=(num)=>{
    return (Math.trunc(num*100)/100);
  }
/************************************/



///////////////////OBTENER USUARIO/////////////////////////////////////
  const getUser=()=>{

    if(logged){

      if("usuario_actual" in localStorage){
        let data=JSON.parse(localStorage.getItem("usuario_actual"));
        
        setUser(data);
      }

      else{
        let data=JSON.parse(sessionStorage.getItem("usuario_actual"));
        setUser(data);
        
      }
    }
  };
/*************************************************************************/


/////////////////VACIAR CARRITO////////////////////////////////////////////
  const vaciarCarrito =()=>{
    setCarritoNum(0);
    setTotal(0);
    setCarritoProducts([]);
  }

/*************************************************************************/


/////////////// ENVIAR ORDEN //////////////////////////////////////

const enviarOrden= async (orden)=>{
  await addDoc(ordersCollectionRef,{
    orden
  }).then(()=>{
    Swal.fire({
    icon: 'success',
    title: 'Compra realizada con éxito',
  }).then(()=>{
    vaciarCarrito();
    window.location.href="./";
  });})
}

/*****************************************************************************/



/////////OBTENER INFO//////////////////////////////////////////////////////

  const Comprar=async ()=>{

    if(!logged){
      Swal.fire({
        title: 'Debes iniciar sesión para continuar',
        confirmButtonText: 'OK',
      }).then(() => {
        window.location.href="./Login";
       })
    }

    else{
      if(carritoNum==0){
        Swal.fire({
          title: 'El carrito esta vacío',
          confirmButtonText: 'OK',
          icon:'info',
        })
      }

      else{

        const formValues = await Swal.fire({
          title: '¡Ya casi! ',
          html:
            '<h6>Solo necesitamos algunos datos más para poder terminar tu compra</h6>'+
            '<p>Nombre</p>'+
            '<input id="swal-input1" class="swal2-input">' +
            '<p>Apellido</p>'+
            '<input id="swal-input2" class="swal2-input">'+
            '<p>Teléfono</p>'+
            '<input id="swal-input3" class="swal2-input">',
          focusConfirm: false,
          preConfirm: () => {
            return [
              document.getElementById('swal-input1').value,
              document.getElementById('swal-input2').value,
              document.getElementById('swal-input3').value,
            ]
          }
        }).then((result)=>{

          if((result.value[0].length==0)||(result.value[1].length==0)||(result.value[2]==0)){
            swal.fire("Por favor, rellene todos los campos");
          }

          else{
            if((result.value[2].length<7)){
              swal.fire("Introduzca un número de teléfono válido");
            }

            else{
                if(isNaN(Number(result.value[2]))){
                  swal.fire("Introduzca un número de teléfono válido");
                }

                else{
                    return result;
                }
          }
        }

        })
      
        if(formValues!=undefined){
          let Subordenes= carritoProducts.map((producto)=>{
            let subOrden={
              nombre:producto.title,
              cantidad:producto.quantity,
              precioTotalProducto:(producto.price*producto.quantity),
            }
            return subOrden
          })
          
          let orden={
            Usuario_comprador:user.usuario,
            nombre:formValues.value[0],
            apellido:formValues.value[1],
            teléfono:formValues.value[2],
            precioTotalOrden:total,
            subordenes:Subordenes,
          }

          enviarOrden(orden);

        }
    }

    }
  }



/**************************************************************************************/

  useEffect(() => {
    getUser();
  },[]);



  return (
    <div className={styles.checkoutContainer}>
        <h2>Finalizar compra</h2>
        
        <div className={styles.checkoutTable}>
              <h3>Producto</h3>
              <h3>Cantidad</h3>
              <h3>Precio</h3>
            </div>

        <div className={styles.checkout}>
          
      {
      
      (carritoNum == 0) ? (<p>Carrito vacio</p>) : (

        <div>
          {
            carritoProducts.map(product=>{
              return <ItemCheckout key={product.id} producto={product}></ItemCheckout>
            })
          }
        </div>
      )
        
      
      }

        </div>

        <div className={styles.total}>
          <div onClick={vaciarCarrito}  className={styles.VaciarCarritoContainer}>
            <RemoveShoppingCartIcon className={styles.VaciarCarrito}></RemoveShoppingCartIcon>
          </div>
          
          <button onClick={Comprar} className={styles.comprarButton}>Comprar ahora</button>
          <p>Total: U$S {redondear(total)}</p>
        </div>

    </div>
  )
}

export default Checkout