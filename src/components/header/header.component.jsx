import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = (props) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>

        {props.currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign-out
          </div>
        ) : (
          <Link className="option" to="sign-in">
            Sign-in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
