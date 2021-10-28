import React, { useState } from "react";
import { connect } from "react-redux";
// import { PropTypes } from "prop-types";

import { ColorButton, LoginTabs, LoginTab } from "../styles";
import Grid from "@mui/material/Grid";

import { setUser } from "../actions/user";
import { auth } from "../firebase";

const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loginTab, setLoginTab] = useState(0);

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (authUser) => {
        await authUser.user.updateProfile({ displayName: name.trim() });
        setUser(authUser.user);
        window.location.reload(false);
      })
      .catch((error) => alert(error.message));
  };

  const login = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(async (authUser) => {
        setUser(authUser.user);
      })
      .catch((error) => alert(error));
  };

  return (
    <div class="loginContainer">
      <div class="loginTabContainer">
        <p>HomePage</p>

        <LoginTabs value={loginTab} onChange={(e, newValue) => setLoginTab(newValue)} aria-label="basic tabs example">
          <LoginTab label="Login" />
          <LoginTab label="Register" />
        </LoginTabs>

        <Grid container>
          <Grid item xs={3}>
            Email:
          </Grid>
          <Grid item xs={9}>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Grid>

          <Grid item xs={3}>
            Password:
          </Grid>
          <Grid item xs={9}>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Grid>

          {loginTab === 0 ? (
            <div></div>
          ) : (
            <Grid container>
              <Grid item xs={3}>
                Surname:
              </Grid>
              <Grid item xs={9}>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
              </Grid>
            </Grid>
          )}
        </Grid>
        {loginTab === 0 ? (
          <ColorButton variant="contained" onClick={login}>
            Login
          </ColorButton>
        ) : (
          <ColorButton variant="contained" onClick={register}>
            Register
          </ColorButton>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps, { setUser })(Login);
