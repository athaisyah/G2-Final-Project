import React, { Component } from "react";
import {
  Container,
  Navbar,
  Row,
  Col,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { MDBIcon, MDBFooter } from "mdbreact";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register.js";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginVisible: false,
      registerVisible: false,
    };
  }

  clickLogin = () => {
    this.setState({ loginVisible: !this.state.loginVisible });
  };

  clickRegister = () => {
    this.setState({ registerVisible: !this.state.registerVisible });
  };

  componentDidMount() {
    document.body.style.backgroundColor = "#F0F2F5";
  }

  render() {
    return (
      <div>
        {/* HEADER */}
        <div className="header">
          <Navbar
            sticky="top"
            expand="xl"
            bg="primary"
            color="light"
            style={{ color: "white" }}
          >
            <Navbar.Brand style={{ color: "white" }}>
              <MDBIcon icon="eye" className="mr-3" style={{ color: "white" }} />
              <span style={{ color: "white" }}>Eye - Bank</span>
            </Navbar.Brand>
          </Navbar>
        </div>

        <div>
          <Container className="mt-5 pt-5">
            <Row>
              <Col>
                <Container>
                  <h1 style={{ color: "red" }}>
                    Make Your Life More Meaningful
                  </h1>
                  <br />
                  <h6>
                    Every Indonesian dreams of living a productive and
                    meaningful life.
                  </h6>
                  <h6>
                    We at the Eye-Bank will help to make your dream comes true.
                  </h6>
                  <br />
                  <br />
                  <br />
                  <ButtonGroup size="lg" className="mb-2">
                    <Button onClick={this.clickLogin}>Login</Button>
                    <Button onClick={this.clickRegister}>Register</Button>
                  </ButtonGroup>
                </Container>
              </Col>
              <Col>
                {this.state.loginVisible || this.state.registerVisible ? (
                  <Register />
                ) : (
                  <Login />
                )}
              </Col>
            </Row>
          </Container>
        </div>

        <div>
          <MDBFooter
            color="blue"
            className="text-center font-small darken-2 fixed-bottom"
          >
            <p className="footer-copyright mb-0 py-3 text-center">
              &copy; 2020 Copyright: <a href="#"> Eye Bank </a>
            </p>
          </MDBFooter>
        </div>
      </div>
    );
  }
}

export default Main;
