import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  return (
    <div>
        <NavLink to ="/">Home</NavLink>
        
        <NavLink to ="/AddProject">Add Project</NavLink>
    </div>
  );
}
