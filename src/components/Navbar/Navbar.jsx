import { useState,useEffect, useContext } from "react";
import styles from "./Navbar.module.css";
import NavSup from "./NavSup/NavSup";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";
import LogContext from "../../Contexts/LogContext";
import { useNavigate } from "react-router-dom"

const Navbar = ({categories}) => {
  
  const navigate = useNavigate();
  const {logged,setLogged,loading,setLoading}=useContext(LogContext);
  const [catShow,setCatShow] = useState(false);
  const [user,setUser]=useState("");
  const [showCS,setShowCS]=useState(false);


//OBTENER USUARIO ACTUAL********************************************//
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

      console.log(user);
    }
  };



  useEffect(() => {
    getUser();
  },[logged]);

/***********************************************************************/

//LOGOUT***************************************************************//
const logout=()=>{
  if("usuario_actual" in localStorage){
    localStorage.removeItem("usuario_actual");
  }
  
  if("usuario_actual" in sessionStorage){
  sessionStorage.removeItem("usuario_actual");
  }
  setLogged(false);
  navigate("/CoderReact/");
}


/***********************************************************************/


//MOSTRAR CATEGORÍAS***************************************************//
  const catDisplay= ()=>{
    if (catShow){
      setCatShow(false);
    }

    else{
      setCatShow(true);
    }
  }


  useEffect(()=>{
    let menu=document.querySelector(".catMenu");
    if(catShow){
      menu.style.display="grid";
    }

    else{
      menu.style.display="none";
    }
  },[catShow]);
  
/*******************************************************************/

//MOSTRAR CERRAR SESIÓN ******************************************//
  const CSDisplay= ()=>{
    if(logged){
      if (showCS){
        setShowCS(false);
      }
  
      else{
        setShowCS(true);
      }
    }

  }

  useEffect(()=>{
    if (logged){
    let menu=document.querySelector(".user_menu");
    
    if(showCS){
      menu.style.display="grid";
    }

    else{
      menu.style.display="none";
    }}
  },[showCS]);
/*********************************************************************/

  return (
    <nav className={styles.Navbar}>

      <NavSup logged={logged}></NavSup>
      
      <ul className={styles.opciones}>
          <Link to="/CoderReact/"><li>Inicio</li></Link>
          <li className="catMenuParent"><span className="fixHover" onClick={catDisplay}>Categorías <KeyboardArrowDownIcon className={styles.displayArrow} /> </span>

            <ul className="catMenu">
              {
              categories.map((category)=>{
              return<Link key={categories.indexOf(category)} to={`/CoderReact/${category}`}><li>{category}</li></Link>
              })
              }
            </ul>
            
          </li>
      </ul>

      {
      
      (logged) ? (
      
        <div className={styles.interfazUsuario}>

        <KeyboardArrowDownIcon className={styles.userArrow}/>
        
        <p onClick={CSDisplay}> {user.usuario} </p>
      
        <ul className="user_menu">
          <Link to={"/CoderReact/Historial"}><li>Historial de compra</li></Link>
          <li onClick={logout}>Cerrar Sesión</li>
        </ul>
        
        </div>

        ) : (

        <ul className={styles.user}>
        <Link to={"/CoderReact/Login"}><li>Ingresar</li></Link>
        <Link to={"/CoderReact/Register"}><li>Registrarse</li></Link>
        </ul>
      )
        
      
      }





    </nav>
  )
}

export default Navbar