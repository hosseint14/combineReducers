import { useSelector } from "react-redux";
import { Fragment } from "react";

import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuthenticate = useSelector(
    (state) => state.auth.auth
  );
  return (
    <Fragment>
      <Header />
      {!isAuthenticate && <Auth />}
      {isAuthenticate && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
