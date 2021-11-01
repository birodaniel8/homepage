import React, { useEffect } from "react";
import { connect } from "react-redux";
import { auth } from "../firebase";
import { setUser } from "../actions/user";
import Login from "./Login";
import News from "./News";
import Search from "./Search";
import { ColorButton } from "../styles";
// import firebase from "firebase/app";

const App = ({ user, setUser }) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      }
    });
    return unsubscribe;
  }, [setUser]);

  const logout = () => {
    auth.signOut().then(() => {
      // remove user from state and navigate to login screen:
      setUser(null);
    });
  };

  if (user?.displayName) {
    return (
      <div>
        <p>{user.displayName}</p>
        <ColorButton variant="contained" onClick={logout}>
          Logout
        </ColorButton>
        <Search />
        <News />
      </div>
    );
  } else {
    return <Login />;
  }
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps, { setUser })(App);
