import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const isAuthenticate = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch({ type: "log" });
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticate && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
