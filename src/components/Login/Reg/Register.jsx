import styles from "./Register.module.css"
import { useContext, useEffect, useState } from "react"
import { addDoc } from "firebase/firestore"
import { collection, getDocs } from 'firebase/firestore'
import db from "../../../../db/firebase-config"

const Register = () => {
  const [email,setEmail]=useState("");
  const [remail,setREmail]=useState("");
  const [usuario,setUsuario]=useState("");
  const [contraseña,setContraseña]=useState("");
  const [rcontraseña,setRContraseña]=useState("");
  const [error,setError]=useState();

  /*USUARIO*/
  const [users,setUsers]= useState([]);
  const usersCollectionRef=collection(db,"users");

  const getUsers = async () =>{
    const usersCollection = await getDocs(usersCollectionRef);
    setUsers(
      usersCollection.docs.map((doc) =>({...doc.data(), id: doc.id}))
    );
  }


  
  
  function validarEmail(mail) {

    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return(emailRegex.test(mail));
  };

  const crearUsuario= async (e)=>{

    await addDoc(usersCollectionRef,{
      contraseña:contraseña,
      email:email,
      usuario:usuario,
    }).then(()=>{
      Swal.fire({
      icon: 'success',
      title: 'Usuario registrado con éxito',
    }).then(()=>{
      window.location.href="./Login";
    });})

  }



  const registrarse=(e)=>{
    e.preventDefault();
    if(!validarEmail(email)){
      setError("Introduzca una dirección de email válida");
    }

    else{
      if(email!=remail){
        setError("Los emails no coinciden");
      }

      else{
        if(usuario.length<4){
          setError("Su nombre de usuario debe tener por lo menos 4 caracteres")
        }

        else{

          let userExists=users.some(user=>(user.usuario==usuario));
          console.log(users)

          if(userExists){
            setError("Nombre de usuario no disponible");
          }

          else{

            if(contraseña.length<8){
              setError("Su contraseña debe tener por lo menos 8 caracteres");
            }

            else{
              if(contraseña!=rcontraseña){
                setError("Las contraseñas no coinciden");
              }

              else{
                crearUsuario();

              }
            }
          }

        }
        
      }
    }
    
  }

  useEffect(() => {
    getUsers();
  }, )

  return (
    <div className={styles.regContainer}>
      
      <form className={styles.registrarse_formulario}>
            <p>CREA TU CUENTA</p>
            <fieldset>
                <label className={styles.form_element}>Email<input onChange={e=>{setEmail(e.target.value)}} className={styles.input_email} type="email" name="email"/></label>
                <label className={styles.form_element}>Repetir Email<input onChange={e=>{setREmail(e.target.value)}} className={styles.input_email} type="email" name="email"/></label>
                <label className={styles.form_element}>Usuario<input onChange={e=>{setUsuario(e.target.value)}} className={styles.input_usuario} type="text" name="usuario"/></label>
                <label className={styles.form_element}>Contraseña<input onChange={e=>{setContraseña(e.target.value)}} className={styles.input_contraseña}type="password" name="contraseña"/></label>
                <label className={styles.form_element}>Repetir Contraseña <input onChange={e=>{setRContraseña(e.target.value)}} className={styles.input_contraseña_rep} type="password" name="rep_contraseña"/></label>
                <div className={styles.form_element}>
                  <p>{error}</p>
                  <button onClick={registrarse}>Registrarse</button>
                </div>
                
            </fieldset>
        </form>

    </div>
  )
}

export default Register