// import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.style.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
const Navigation = () => {
  return (
    <>
    <div className="navigation">
      <div className="logo-container-div">
        
        <Link className="logo-container" to="/">
      <CrwnLogo className="logo" />
        </Link>
      </div>

      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          <h1>Shop</h1>
        </Link>
        <Link className="nav-link" to="/sign-in">
          <h1>Sign IN</h1>
        </Link>
      </div>
      
    </div>
    <Outlet />
    </>
  );
};
export default Navigation;
