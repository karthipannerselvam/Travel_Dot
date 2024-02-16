import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { SiYourtraveldottv } from 'react-icons/si';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { UserContext } from '../UserContext';

const Navbar = () => {
  const [active, setActive] = useState('navBar');
  const [transparent, setTransparent] = useState('header');
  const { name } = useContext(UserContext); // Access the username from UserContext

  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  const removeNav = () => {
    setActive('navBar');
  };

  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent('header activeHeader');
    } else {
      setTransparent('header');
    }
  };

  window.addEventListener('scroll', addBg);

  return (
    <>
      <section className="navBarSection">
        <div className={transparent}>
          <div className="logoDiv">
            <a href="#" className="logo">
              <h1 className="flex">
                <SiYourtraveldottv className="icon" />
                Dot
              </h1>
            </a>
          </div>

          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <Link to="/home" className="navLink">
                  Home
                </Link>
              </li>

              <li className="navItem">
                <Link to="/destiny" className="navLink">
                  Destinations
                </Link>
              </li>

              <li className="navItem">
                <Link to="/pack" className="navLink">
                  Packages
                </Link>
              </li>

              <li className='navItem'>
              <Link to="/visa" className='navLink'>Apply for eVisa</Link>
            </li>

              {name ? ( // Check if the user is authenticated and display username
                <li className="navItem">
                  <span className="navLink">Welcome, {name}</span>
                </li>
              ) : (
                // Render login and signup buttons if the user is not authenticated
                <div className="headerBtns flex">
                  <button className="btn loginBtn">
                    <Link to="/login">Login</Link>
                  </button>
                  <button className="btn loginBtn">
                    <Link to="/signup">Sign Up</Link>
                  </button>
                </div>
              )}
            </ul>

            <div onClick={removeNav} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>

          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
