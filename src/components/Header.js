import { useLocation, Link } from "react-router-dom";
import logo from "../images/logo.svg";

function Header(props) {
  const location = useLocation();

  return (
    <div>
      <header className="header header__container ">
        <div className="header__wrap">
          <img className="header__logo" src={logo} alt="Логотип Место" />

          {location.pathname === "/sign-in" && (
            <Link to="/sign-up" className="header__link">
              Регистрация
            </Link>
          )}

          {location.pathname === "/sign-up" && (
            <Link to="/sign-in" className="header__link">
              Войти
            </Link>
          )}

          {location.pathname === "/" && (
            <div className="header__user-info">
              <p className="header__email">{props.email}</p>
              <Link
                to="/sign-in"
                className="header__link"
                onClick={props.onSignOut}
              >
                Выйти
              </Link>
            </div>
          )}
        </div>
        <div className="header__line"></div>
      </header>
    </div>
  );
}

export default Header;
