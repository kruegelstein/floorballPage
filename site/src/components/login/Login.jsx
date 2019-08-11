import React from "react";
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import { login } from "../../network/api";

const BACKEND_URL = " http://localhost:8080";

const LoginComp = styled.div`
  color: #2c2c2f;
`;

const HeaderTitle = styled.h1`
  text-align: center;
  margin-bottom: 56px;
`;

const Card = styled.div`
  text-align: center;
  width: 50%;
  margin: auto;
  border: 1px solid #8c96a0;
  box-shadow: 10px 10px 10px #8c96a0;
  border-radius: 10px;
`;

const Form = styled.form``;

const Wrapper = styled.div`
  margin: 16px auto;
`;

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };
  onSubmit = () => {
    axios
      .post(`${BACKEND_URL}/login`, {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        console.log("****", res);
      });
  };

  handleChangeUsername = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleChangePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  render() {
    return (
      <LoginComp>
        <HeaderTitle>Admin Anmeldung</HeaderTitle>
        <Card>
          <Form autoComplete="off">
            <Wrapper>
              <TextField
                id="outlined-name"
                label="Name"
                value={this.state.username}
                onChange={event => this.handleChangeUsername(event)}
                margin="normal"
                variant="outlined"
                autoComplete="off"
              />
            </Wrapper>
            <Wrapper>
              <TextField
                id="adornment-password"
                type="password"
                label="Passwort"
                value={this.state.password}
                onChange={event => this.handleChangePassword(event)}
                margin="normal"
                variant="outlined"
                autoComplete="new-password"
              />
            </Wrapper>
            <Wrapper>
              <Button
                variant="contained"
                color="primary"
                onClick={this.onSubmit}
                disabled={!this.state.username || !this.state.password}
              >
                Login
              </Button>
            </Wrapper>
          </Form>
        </Card>
      </LoginComp>
    );
  }
}

export default Login;
