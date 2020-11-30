import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
import { connect } from "react-redux";
import { setLogin, setInput } from "../../../Redux/Action/index";

const _http = axios.create({
  baseURL: "http://localhost:8080/mbanking",
  headers: {
    "content-type": "application/json;charset=utf-8",
  },
  withCredentials: true,
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      username: "",
      password: "",
      error: false,
      message: "",
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange = async (e) => {
    e.preventDefault();
    // console.log(e.target.value);

    await this.setState({
      [e.target.name]: e.target.value,
    });

    this.kasihData();
  };

  kasihData = () => {
    const { username, password } = this.state;
    this.props.input({ username, password });
  };

  handleCheckLogin = async () => {
    const res = await _http.post(`/login`);
    if (res.data !== false) {
      this.setState({
        isLogin: true,
        username: res.data,
      });
    } else {
      this.setState({
        isLogin: false,
      });
    }
  };

  handleLogin = async (e) => {
    e.preventDefault();

    axios
      .post(`/login`, {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
        this.setState({
          ...this.state,
          error: false,
          isLogin: true,
          message: response.data.message,
        });

        if (this.state.message.User === this.state.username + " success login") {
          swal("Looks Good!", "Login Success", "success");
          console.log("Login successful!");
          return this.props.changeStatusLogin();
        } else {
          swal(
            "Oops!",
            this.state.message + "\n Please check your Username and Password!",
            "error"
          );
          console.log("Oops, login failed!");
        }
      })
      .catch((err) => {
        console.log("Oops, request failed!");
        swal("Oops!", "Error", "error");
      });
  };

  handleErrorMessage = (bool) => {
    this.setState({ error: bool });
  };

  render() {
    return (
      <div>
        <div className="card card-login mx-auto">
          <div style={{fontWeight:"bold", textAlign:"center"}} className="card-header">Login Eye-Bank Internet Banking</div>
          <div className="card-body">
            <Form>
              <Form.Group controlId="username">
                {/* <Form.Label>Username</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  required="true"
                  // isValid="Required field"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="password">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  // value={this.state.password}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button
                variant="success"
                type="submit"
                style={{ color: "white" }}
                onClick={this.handleLogin}
              >
                Login
              </Button>
            </Form>

            {/* FOOTER */}
            <div className="text-center">
              <a className="d-block small" href="#">
                Forgot Password?
              </a>
            </div>

            {this.state.isLogin ? (
              <div className="text-center">
                <a className="d-block small" href="#">
                  {this.state.username}
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  statusLogin: state.main.isLogin,
  userInput: state.login.username,
  passwordInput: state.login.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeStatusLogin: () => dispatch(setLogin()),
  input: (data) => dispatch(setInput(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
