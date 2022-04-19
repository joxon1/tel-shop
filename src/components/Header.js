import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

export default function Header() {
  const [login, setLogin] = useState(false);

  const showLogin = () => setLogin(!login);

  return (
    <>
      <nav class="navbar navbar-dark bg-dark header">
        <Link to="/" className="logo_home">
          -TelShop-
        </Link>
        <div className="login_home">
          <Link to="/login" className="btn btn-success" onClick={showLogin}>
            Войти
          </Link>
          <div className="btn btn-primary">Регистрация</div>
        </div>
      </nav>
    </>
  );
}
