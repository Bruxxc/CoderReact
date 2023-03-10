import { useState,useEffect } from "react";
import styles from "./Navbar.module.css";
import NavSup from "./NavSup/NavSup";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";

const Navbar = ({categories}) => {
  
  const [catShow,setCatShow] = useState(false);

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
  

  return (
    <nav className={styles.Navbar}>

      <NavSup></NavSup>
      
      <ul className={styles.opciones}>
          <Link to="/CoderReact/"><li>Inicio</li></Link>
          <li className="catMenuParent"><span className="fixHover" onClick={catDisplay}>Categorías <KeyboardArrowDownIcon className={styles.displayArrow} /> </span>

            <ul className="catMenu">
              {categories.map((category)=>{
              return<Link to={`/CoderReact/${category}`}><li>{category}</li></Link>
              })
              }
            </ul>
            
          </li>
          <li>Ofertas</li>
          <li>Contacto</li>
          <li>Vender</li>
      </ul>

      <ul className={styles.user}>
        <li>Ingresar</li>
        <li>Registrarse</li>
      </ul>

    </nav>
  )
}

export default Navbar