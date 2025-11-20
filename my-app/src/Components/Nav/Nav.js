import './nav.css';


import { NavLink } from "react-router";


function Nav() {


    return (

        <div>

<div> <h2>Nav</h2></div>
        
        <div className="nav">

           

            <NavLink className="menu" to="/ressources">Ressources</NavLink>
            <NavLink className="menu" to="/events">Events</NavLink>
            <NavLink className="menu" to="/notifications">Notifications</NavLink>






        </div>

</div>
    );

}
export default Nav;