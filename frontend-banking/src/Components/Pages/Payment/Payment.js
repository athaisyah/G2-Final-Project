import React, { Component } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import Telephone from "./Telephone";
import Phone from "./Phone";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTelephone: false,
      showPhone: true,
    };
  }
  render() {
    const style = { width: "250px" };
    const { showTelephone, showPhone } = this.state;
    return (
      <div>
        {/* <MDBContainer> */}
        <MDBRow>
          <MDBCol md="3">
            <div className="row">
              <div className="col-md-12 text-center lg-5">
                <div className="btn-group-vertical">
                  <button
                    onClick={() => {
                      this.setState({
                        showTelephone: !showTelephone,
                        showPhone: true,
                      });
                      window.location.reload();
                    }}
                    style={style}
                    type="button"
                    className="btn btn-success btn-lg btn-rounded text-lg-70"
                  >
                    <i className="fas fa-phone-alt  fa-4x pr-2 m-2"></i>
                    TELEPHONE
                  </button>
                  <button
                    onClick={() => {
                      this.setState({
                        showPhone: !showPhone,
                        showTelephone: true,
                      });
                      // window.location.reload();
                    }}
                    style={style}
                    type="button"
                    className="btn btn-warning btn-lg btn-rounded text-lg"
                  >
                    <i
                      className="fas fa-mobile-alt fa-4x pr-2 m-2"
                      aria-hidden="true"
                    ></i>
                    POSTPAIDPHONE BILL
                  </button>
                  <button
                    style={style}
                    type="button"
                    className="btn btn-danger btn-lg btn-rounded text-lg"
                    disabled
                  >
                    <i
                      className="fas fa-wifi fa-4x pr-2 m-2"
                      aria-hidden="true"
                    ></i>
                    INTERNET
                  </button>
                  <button
                    style={style}
                    type="button"
                    className="btn btn-info btn-lg btn-rounded text-lg"
                    disabled
                  >
                    <i
                      className="fas fa-hospital fa-4x pr-2 m-2"
                      aria-hidden="true"
                    ></i>
                    BPJS
                  </button>
                  <button
                    style={style}
                    type="button"
                    className="btn btn-purple btn-lg btn-rounded text-lg"
                    disabled
                  >
                    <i
                      className="fas fa-lightbulb fa-4x pr-2 m-2"
                      aria-hidden="true"
                    ></i>
                    PLN
                  </button>
                </div>
              </div>
            </div>
          </MDBCol>

          <MDBCol md="9">
            <div style={{ display: showTelephone ? "none" : "block" }}>
              <Telephone />
            </div>
            <div style={{ display: showPhone ? "none" : "block" }}>
              <Phone />
            </div>
          </MDBCol>
        </MDBRow>
        {/* </MDBContainer> */}
      </div>
    );
  }
}

export default Payment;
