import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import swal from "sweetalert";
import { MDBBtn, MDBInput } from "mdbreact";
import Axios from "axios";
import Success from "./Success";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      no_account: 0,
      no_phone: 0,
      username: "",
      email: "",
      password: "",
      responseShow: "",
      showOTP: false,
      showSuccess: false,
      otp: "",
    };
  }

  handleChange = async (e) => {
    e.preventDefault();
    await this.setState({
      [e.target.name]: e.target.value,
    });
  };

  swalFunction = (msg) => {
    swal(
      "Your account is successfully created, \n\n Your one step closer",
      "Please enter OTP code to verify your Account.\nCurrent OTP Code is 123456.",
      "success"
    ).then(() => {
      this.setState({
        showOTP: !this.state.showOTP,
      });
    });
  };

  // handleRegister = (e) => {
  //   e.preventDefault();
  //   this.swalFunction();
  // };

  handleRegister = (e) => {
    e.preventDefault();

    const ts = this.state;

    Axios.post(`register`, {
      name: ts.name,
      no_account: ts.no_account,
      no_phone: ts.no_phone,
      username: ts.username,
      email: ts.email,
      password: ts.password,
    })
      .then((response) => {
        console.log(response.data);
        
        if (response.data.message === "Registration eBanking success. ") {
          console.log("Your account is successfully created!");
          this.setState({
            responseShow: response.data.message,
            // showOTP: !this.state.showOTP,
          });
          this.swalFunction();
        } else {
          swal("Something Wrong!", response.data.message, "warning")
        }
      })
      .catch((error) => {
        console.log("Oops, request failed!");
        console.error(e);
        swal("Oops!", error, "error");
      });
  };

  handleOTP = (e) => {
    e.preventDefault();
    if (this.state.otp === "123456") {
      Axios.post(`verified/`+this.state.otp)
      .then((response) => {
        console.log(response);
        console.log(response.data.message)
      })
      .then(() => {
      this.setState({
        showSuccess: !this.state.showSuccess,
      });
      })
    } else {
      swal("Something Wrong!", "Please enter the correct code", "warning");
    }
  };

  render() {
    return (
      <>
        {!this.state.showOTP ? (
          <div className="card card-register mx-auto">
            <div
              style={{ fontWeight: "bold", textAlign: "center" }}
              className="card-header"
            >
              Register to Eye-Bank Internet Banking
            </div>
            <div className="card-body">
              <Form>
                <Form.Group controlId="validationName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    required="true"
                    name="name"
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="no_account">
                  <Form.Label>Account Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Account Number"
                    required="true"
                    name="no_account"
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="no_phone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Phone Number"
                    required="true"
                    name="no_phone"
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    required="true"
                    name="username"
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required="true"
                    name="email"
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required="true"
                    name="password"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button
                  variant="success"
                  type="submit"
                  style={{ color: "white" }}
                  onClick={this.handleRegister}
                >
                  Create Account
                </Button>
              </Form>
            </div>
          </div>
        ) : (
          [
            !this.state.showSuccess ? (
              <div className="card card-register mx-auto">
                <div
                  style={{ fontWeight: "bold", textAlign: "center" }}
                  className="card-header"
                >
                  OTP
                </div>
                <div className="card-body">
                  <form>
                    <div>
                      <MDBInput
                        label="Type otp number in here"
                        icon="mobile-alt"
                        group
                        type="number"
                        required
                        validate
                        error="wrong"
                        success="right"
                        name="otp"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="text-center mt-4">
                      <MDBBtn
                        color="success"
                        className="mb-3"
                        type="submit"
                        style={{ float: "right" }}
                        onClick={this.handleOTP}
                      >
                        Verify Account
                      </MDBBtn>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <Success success={this.state.showSuccess} />
            ),
          ]
        )}
      </>
    );
  }
}

export default Register;
