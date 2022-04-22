import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/images/logo-black.png';
import auth from "../../../firebase";


const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary sticky-top"  >
    <div className="container-fluid">
      <Link className="navbar-brand" to='/'>
        <img src={logo} height="50" alt="" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink style={({isActive}) => isActive ? {color:'goldenrod'} : {color:'black'}} className="   fs-3 me-5 text-decoration-none" aria-current="page" to='/'>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={({isActive}) => isActive ? {color:'goldenrod'} : {color:'black'}} className="   fs-3 me-5 text-decoration-none" aria-current="page" to='/addservice'>add service</NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={({isActive}) => isActive ? {color:'goldenrod'} : {color:'black'}} className="  fs-3 me-5 text-decoration-none" to='/about'>about</NavLink>
          </li>


          { user ? <button onClick={() => signOut(auth)} className="btn btn-danger">sign out</button> : <li className="nav-item">
            <NavLink style={({isActive}) => isActive ? {color:'goldenrod'} : {color:'black'}} className="  fs-3 me-5 text-decoration-none" to='/login'>login</NavLink>
          </li>}

        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Header;
