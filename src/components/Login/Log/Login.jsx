import { useContext, useEffect, useState } from "react";
import styles from "./Login.module.css"
import LogContext from "../../../Contexts/LogContext";
import { collection, getDocs } from 'firebase/firestore'
import db from "../../../../db/firebase-config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  const {logged,setLogged,loading,setLoading}=useContext(LogContext);
  const [error,setError]=useState("");
  const [usuario,setUsuario]=useState("");
  const [contraseña,setContraseña]=useState("");
  const [permanecer,setPermanecer]=useState(false);
  const navigate = useNavigate();
  
  /*USUARIO*/
  const [users,setUsers]= useState([]);
  const usersCollectionRef=collection(db,"users");
  
  const getUsers = async () =>{
    const usersCollection = await getDocs(usersCollectionRef);
    setUsers(
      usersCollection.docs.map((doc) =>({...doc.data(), id: doc.id}))
  );}
    
  
  const login=(e)=>{
    e.preventDefault();
    let CheckUser=users.filter(user=>(user.usuario==usuario));
    
    users.forEach(user => {
      console.log(user)
    });

    
    if(CheckUser.length==0){
      setError("usuario o contraseña incorrectos");
    }
    
    else{
      
      if(CheckUser[0].contraseña!=contraseña){
        setError("usuario o contraseña incorrectos");
      }
      
      else{
        let u_a=JSON.stringify(CheckUser[0]);

        if(permanecer){
          localStorage.setItem("usuario_actual",u_a);
        }

        else{
          sessionStorage.setItem("usuario_actual",u_a);
        }

        setLogged(true);
        Swal.fire({
          title: `Bienvenido ${usuario} `,
        }).then(()=>{
          setLogged(true);
          navigate("/CoderReact/");
        });
      }

    }
  }


  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className={styles.logContainer}>

          <form className={styles.login_formulario} action="">
            <p>INICIAR SESIÓN</p>
            <fieldset>
                <label className={styles.form_element}>Usuario<input onChange={e=>{setUsuario(e.target.value)}} className={styles.input_usuario} type="text" name="usuario" /></label>
                <label className={styles.form_element}>Contraseña<input onChange={e=>{setContraseña(e.target.value)}} className={styles.input_contraseña} type="password" name="contraseña"/></label>
                <label className={styles.pconectado}>Permanecer conectado <input onChange={(e)=>{setPermanecer(e.target.checked); console.log(permanecer)}} className={styles.input_npconectado} type="checkbox"/></label>
                
                <div className={styles.form_element}>
                  <p>{error}</p>
                  <button onClick={login}>Iniciar sesión</button>
                </div>
                
            </fieldset>
            <p className={styles.log_advertencia}></p>
          </form>

    </div>
  )
}


export default Login