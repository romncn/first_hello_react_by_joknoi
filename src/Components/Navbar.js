import React from 'react';


const Navbar = (props) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">{props.children}</span>
    </nav>
  )
}

export default Navbar;
