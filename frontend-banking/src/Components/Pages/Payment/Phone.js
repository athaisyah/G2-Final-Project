import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBBtn,
  MDBInput,
  MDBInputGroup,
  MDBListGroup,
  MDBListGroupItem,
} from "mdbreact";
import PaymentInvoice from "./PhoneInvoice";
import Axios from "axios";
import swal from "sweetalert";
import { connect } from "react-redux";

class Phone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBill: false,
      showInvoice: false,
      handphoneNumber: 0,
      description: "",

      hpNumber: "",
      nameCustomer: "",
      paymentPeriod: "",
      billAmount: "",
      status: "",
      provider: "",
    };
  }

  handleChange = async (e) => {
    e.preventDefault();
    // console.log(e.target.value);

    await this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlePostpaidPhone = (e) => {
    e.preventDefault();
    const usernamenya = this.props.usernya;
    const pwdnya = this.props.passwordnya;

    Axios.post(`/handphone`, {
      handphoneNumber: this.state.handphoneNumber,
      username: usernamenya,
      password: pwdnya,
    })
      .then((response) => {
        if (response.data.message === "Handphone Number " + this.state.handphoneNumber + " not found") {
          console.log(response.data.message)
          console.log(response)
          swal(
            "Oops!",
            "This Handphone Number: " +
              this.state.handphoneNumber +
              " Not Found!",
            "error"
          );
        } else {
          console.log("ini dibagian else")
          this.setState({
            ...this.state,
            nameCustomer: response.data.message.Name,
            hpNumber: response.data.message.Handphone,
            paymentPeriod: response.data.message.Period,
            billAmount: this.FormatCurrency(response.data.message.Amount),
            status: response.data.message.Status,
            provider: response.data.message.Provider,
            showBill: !this.state.showBill,
          });          
          console.log("ini dibagian else")
          console.log(response.data.message)
          console.log(response)

        }
      })
      .catch((error) => {
        console.log(error);
        console.log("Oops, request failed!");
        swal("Oops!", "Error", "error");
      });
  };

  handlePay = (e) => {
    e.preventDefault();
    const usernamenya = this.props.usernya;
    const pwdnya = this.props.passwordnya;

    Axios.post(`handphone/payment`, {
      handphoneNumber: this.state.handphoneNumber,
      username: usernamenya,
      password: pwdnya,
    }).then((response) => {
      console.log(response.data);
      this.setState({
        ...this.state,
        showInvoice: !this.state.showInvoice,

        status: "Paid",
      });
    });
  };

  FormatCurrency = (uang) => {
    var amount = parseFloat(uang);
    return amount.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  render() {
    return (
      <>
        {!this.state.showBill ? (
          <MDBContainer className="mt-2">
            <MDBRow>
              <MDBCol md="6">
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardHeader className="form-header sunny-morning-gradient rounded">
                      <h3 className="my-3-white">
                        <i
                          class="fas fa-mobile-alt pr-2 m-2"
                          aria-hidden="true"
                        ></i>
                        CARD POSTPAID
                      </h3>
                    </MDBCardHeader>
                    <form>
                      <div className="grey-text">
                        <MDBInputGroup
                          containerClassName="mb-3 mt-4"
                          prepend={
                            <MDBBtn
                              color="warning"
                              className="m-0 px-3 py-2 z-depth-0"
                              disabled
                            >
                              PROVIDER
                            </MDBBtn>
                          }
                          inputs={
                            <select
                              className="browser-default custom-select"
                              required
                              name="provider"
                              onChange={this.handleChange}
                            >
                              <option value="indosat">Indosat</option>
                              <option value="xl">XL</option>
                              <option value="telkomsel">Telkomsel</option>
                            </select>
                          }
                        />
                        <MDBInput
                          label="Type your Phone number"
                          icon="mobile-alt"
                          group
                          type="number"
                          validate
                          error="wrong"
                          success="right"
                          required
                          name="handphoneNumber"
                          onChange={this.handleChange}
                        />
                        <MDBInput
                          label="Type your Description"
                          icon="sticky-note"
                          group
                          type="text"
                          name="description"
                          onChange={this.handleChange}
                        />
                      </div>

                      <div className="text-center mt-4">
                        <MDBBtn
                          color="warning"
                          className="mb-3"
                          type="submit"
                          onClick={this.handlePostpaidPhone}
                        >
                          Check Bill
                        </MDBBtn>
                      </div>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        ) : (
          [
            !this.state.showInvoice ? (
              <MDBContainer className="mt-2">
                <MDBRow>
                  <MDBCol md="6">
                    <MDBCard>
                      <MDBCardBody>
                        <MDBCardHeader className="form-header sunny-morning-gradient rounded">
                          <h3 className="my-3-white">BILLING</h3>
                        </MDBCardHeader>
                        <div style={{ marginTop: 20 }}>
                          <MDBListGroup>
                            <MDBListGroupItem>
                              <div style={style.left}>Provider</div>
                              <div style={style.right}>
                                {this.state.provider}
                              </div>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                              <div style={style.left}>Phone Number</div>
                              <div style={style.right}>
                                {this.state.hpNumber}
                              </div>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                              <div style={style.left}>Payment Period</div>
                              <div style={style.right}>
                                {this.state.paymentPeriod}
                              </div>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                              <div style={style.left}>Bill Amount</div>
                              <div style={style.right}>
                                {this.state.billAmount}
                              </div>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                              <div style={style.left}>Admin Fee</div>
                              <div style={style.right}>Rp 5.000.00</div>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                              <div style={style.left}>Status</div>
                              <div style={style.right}>{this.state.status}</div>
                            </MDBListGroupItem>
                          </MDBListGroup>
                          <div className="text-center mt-4">
                            <MDBBtn
                              color="warning"
                              className="mb-3"
                              type="submit"
                              disabled={this.state.status === "Paid"}
                              onClick={this.handlePay}
                            >
                              Pay Now
                            </MDBBtn>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            ) : (
              <PaymentInvoice
                pay={this.state.showInvoice}
                handphoneNumber={this.state.handphoneNumber}
                paymentPeriod={this.state.paymentPeriod}
                billAmount={this.state.billAmount}
                status={this.state.status}
                provider={this.state.provider}
              />
            ),
          ]
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  usernya: state.login.username,
  passwordnya: state.login.password,
});

export default connect(mapStateToProps)(Phone);

const style = {
  left: {
    float: "left",
    fontWeight: "bold",
    color: "grey",
  },
  right: {
    float: "right",
  },
};
