import styles from '../styles/Nav.module.scss'
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdCodeOff } from 'react-icons/md';
import { useState } from "react";

const Navbar = () => {

  const [burger, setBurger] = useState(false);

  const handleHamburger = () => {
    setBurger(!burger)
  }
  return (
    <>
    <div className={styles.bg__shape}></div>
      <nav className={styles.navbar}>
        <div className={styles.nav__brand}>
          <Link to="/">
          <MdCodeOff size={45}/>
            <span>Bajeri</span>
          </Link>
        </div>

        <ul className={burger ? `${styles.nav__menu} ${styles.active}` : `${styles.nav__menu}`}>
          <li className={styles.nav__item}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink to="#features">Features</NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink to="#portfolio">Portfolio</NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink to="#skills">Skills</NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink to="#blog">Blog</NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink to="#contact">Contact</NavLink>
          </li>
        </ul>
        <div className={styles.hamburger} onClick={handleHamburger}>
          {burger ? (<FaTimes size={30} style={{color: 'black'}} />) : (<FaBars size={30} style={{color: 'black'}} />)}
        </div>
          <button className={styles.btn}>contact now</button>
      </nav>
      </>
  )
}

export default Navbar
