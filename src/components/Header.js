import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark header">
        <Link to="/" className="logo_home">
          -TelShop-
        </Link>
        <div className="login_home">
          <Link to="/login" className="btn btn-success">
            Войти
          </Link>
          <Link to="/registr" className="btn btn-primary">
            Регистрация
          </Link>
        </div>
      </nav>
    </>
  );
}
