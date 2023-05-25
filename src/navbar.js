import React,{useState} from "react";
import{NavLink, useHistory } from "react-router-dom";

const Navbar = () => {

    const [show, setShow] = useState(false);
    const history = useHistory();

    const handleSignup = () => {
      history.push("/signup");
    };
    const handleLogin = () => {
      history.push("/login");
    };

    return <>
    <section classNameName="navbar-bg">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">PalmPay</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() =>setShow(!show) }>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink classNameName="nav-link active" aria-current="page" to="/"></NavLink>
        </li>
        <li classNameName="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/signup"></NavLink>
                </li>
                <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/login"></NavLink>
                </li>
       
       
      </ul>
      <form className="d-flex">
       
        <button className="btn btn-style btn-style-border" type="button" onClick={handleSignup}>Sign Up</button>
        <button className="btn btn-style btn-style-border" type="button" onClick={handleLogin}>Login</button>
        
      </form>
    </div>
  </div>
</nav>
</section>
</>
};

export default Navbar; 