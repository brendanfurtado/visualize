import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <li>
        <NavLink to="/"></NavLink>
        <NavLink to="/about"></NavLink>
        <NavLink to="/sorting"></NavLink>
      </li>
    </div>
  );
};

export default Navigation;
