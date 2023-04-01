import { useContext, useEffect, useState } from "react";
import styles from "./Historial.module.css"
import LogContext from "../../Contexts/LogContext";
import Order from "./Orders/Order";


const Historial = () => {
    const {logged,setLogged,loading,setLoading}=useContext(LogContext);
    const [user,setUser]=useState("");
    const [Hshow,setHshow]=useState(false);
    const getUser=()=>{

        if(logged){
    
          if("usuario_actual" in localStorage){
            let data=JSON.parse(localStorage.getItem("usuario_actual"));
            console.log(data);
            setUser(data);
          }
    
          else{
            let data=JSON.parse(sessionStorage.getItem("usuario_actual"));
            setUser(data);
            console.log(data);
          }
    
          
        }
      };

      useEffect(() => {
        getUser();
        
      },[logged]);

      useEffect(()=>{
        if(user!=""){
            setHshow(true);
        }
      },[user])

    return (
        <div>
            <h2>Historial de compras</h2>
            
            <div className={styles.historialContainer}>
                <div className={styles.Htitles}>
                    <p>N°Compra</p>
                    <p>Comprador</p>
                    <p>Total</p>
                    <p>Detalles</p>
                </div>
            { (Hshow) ? 
                (
                    user.orders.map((order)=>{
                    return <Order key={user.orders.indexOf(order)} id={user.orders.indexOf(order)} order={order}/>
                    })
                    ) : (<p>Debes iniciar sesión para ver tu historial de compras</p>)
                
                }
            </div>
        </div>
    )
}

export default Historial