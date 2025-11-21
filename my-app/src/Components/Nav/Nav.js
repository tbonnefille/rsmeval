import './nav.css';


import { NavLink } from "react-router";


function Nav() {


    return (

  
        
        <div className="nav">

            <NavLink className="menu" to="/">Manage Ressources</NavLink>
            <NavLink className="menu" to="/events"> Manage Events</NavLink>
            <NavLink className="menu" to="/notifications">Notifications</NavLink>


        </div>


    );

}
export default Nav;