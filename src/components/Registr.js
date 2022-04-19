import { Link } from "react-router-dom";
import "../style/Registr.css";
import { AiOutlineClose } from "react-icons/ai";

export default function Registr() {
  return (
    <div className="register">
      <div className="register_back">
        <div className="register_tablo ">
          <div className="register_input">
            <h1>Создать аккаунт</h1>

            <input
              type="email"
              placeholder=" Name or Email"
              className="btn btn-outline-dark"
            />
            <input
              type="number"
              placeholder="Number..."
              className="btn btn-outline-dark"
            />
            <input
              type="password"
              placeholder="Password..."
              className="btn btn-outline-dark"
            />
            <Link to="/home" className="btn btn-primary">
              Зарегитрировать
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
