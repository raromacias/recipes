import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../App.css";

const Header = () => {
 
  return (
    <header className={classes.header}>
      <h2>Devmountain Eatery</h2>
      <nav className="links">
        <NavLink 
        end
        to="" 
        style={({ isActive }) => ({
          color: isActive ? '#fff' : 'whitesmoke',
          textDecoration: isActive ? 'underline' : 'none',
          fontWeight: isActive ? '600' : '',
        })}
        
          >Home</NavLink>
        <NavLink to="/new-recipe" style={({ isActive }) => ({
          color: isActive ? '#fff' : 'whitesmoke',
          textDecoration: isActive ? 'underline' : 'none',
          fontWeight: isActive ? '600' : '',
        })}
           >Add Recipe
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
