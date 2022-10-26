import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav className="links">
         <Link style={{color:'white'}}className="home" to='/'>Home</Link><Link style={{color:'white'}} classname='new' to='/new-recipe'>Add Recipe</Link>
      </nav>
    </header>
  );
};

export default Header;
