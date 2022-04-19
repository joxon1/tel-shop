import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../style/Login.css";

export default function Login() {
  return (
    <div className="login_body">
      <div className="login">
        <div className="desc">
          <h1 className="logo">-TelShop-</h1>
          <p className="logo_decs">Evenet Menegment</p>
        </div>
        <div className="login_tablo">
          <div className="login_input">
            <input
              type="text"
              placeholder="username@g.com"
              className="login_name btn btn-outline-dark"
            />
            <input
              type="password"
              placeholder="password"
              className="login_password btn btn-outline-dark"
            />
            <Link to="/add" className="btn btn-success">
              Войти
            </Link>
            <Link to="registr" className="text-center"> Забыли пароль? </Link>
            <Link to="/registr" className="btn btn-primary">
              Регистрация
            </Link>
          </div>
        </div>

        <Link to="/home" className="menu_bars">
          <AiOutlineClose />
        </Link>
      </div>
    </div>
  );
}
