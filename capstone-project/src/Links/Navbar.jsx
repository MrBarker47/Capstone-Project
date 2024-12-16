import { Link } from "react-router-dom"


export const Navbar = function() {
    return(
    <>
    <nav>
       <ul>
      <li>
       <Link to="/">Home</Link>
      </li>
      <li>
       <Link to="/about">About</Link>   
      </li>
      <li>
       <Link to="/contact">Contact</Link>
      </li>
       <li>
       <Link to="/service">Service</Link> 
       </li>
      </ul>
    </nav>
     </>
    )
}
