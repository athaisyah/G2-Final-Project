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
  MDBListGroup,
  MDBListGroupItem,
} from "mdbreact";
import "../../../index.css";
import PaymentInvoice from "./TelephoneInvoice";
import Axios from "axios";
import swal from "sweetalert";
import {connect} from "react-redux";

class Telephone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBill: false,
      showInvoice: false,
      telephoneNumber: 0,
      description: "",

      tlpNumber: "",
      nameCustomer: "",
      paymentPeriod: "",
      billAmount: "",
      status: "",
    };
  }

  handleChange = async (e) => {
    e.preventDefault();
    // console.log(e.target.value);

    await this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleTelephone = (e) => {
    e.preventDefault();
    const usernamenya = this.props.usernya;
    const pwdnya = this.props.passwordnya;

    Axios.post(`/telephone`, {
      telephoneNumber: this.state.telephoneNumber,
      username: usernamenya,
      password: pwdnya,
    })
    .then((response) => {
      if(response.data.message === "Telephone Number " + this.state.telephoneNumber + " not found") {
        swal("Oops!", "This Telephone Number: " + this.state.telephoneNumber + " Not Found!", "error")
      } else {
        this.setState({
          ...this.state,
          tlpNumber: response.data.message.Telephone,
          nameCustomer: response.data.message.Name,
          paymentPeriod: response.data.message.Period,
          billAmount: this.FormatCurrency(response.data.message.Amount),
          status: response.data.message.Status,
          showBill: !this.state.showBill,
        })

        console.log("ini dibagian else")
        console.log(response.data.message)
        console.log(response)
      }
    })
    .catch((error) => {
      console.log("Oops, request failed!");
      swal("Oops!", "Error", "error");
    })

  };

  handlePay = (e) => {
    e.preventDefault();
    const usernamenya = this.props.usernya;
    const pwdnya = this.props.passwordnya;

      Axios.post(`telephone/payment`, {
        telephoneNumber: this.state.telephoneNumber,
        username: usernamenya,
        password: pwdnya,
      })
      .then((response) => {
        console.log(response.data)
        this.setState({
          ...this.state,
          showInvoice: !this.state.showInvoice,

          status: "Paid",
        })
      })
  };

  FormatCurrency = (uang) => {
    var amount = parseFloat(uang);
    return amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  }

  render() {
    return (
      <>
        {!this.state.showBill ? (
          <MDBContainer className="mt-2 ">
            <MDBRow>
              <MDBCol md="6">
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardHeader className="form-header tempting-azure-gradient rounded">
                      <h3 className="my-3-white">
                        <i className="fas fa-phone-alt pr-2 m-2"></i>
                        TELEPHONE
                      </h3>
                    </MDBCardHeader>
                    <form>
                      <div className="grey-text">
                        <MDBInput
                          label="Type your Telephone number"
                          icon="phone-alt"
                          group
                          type="number"
                          validate
                          error="wrong"
                          success="right"
                          required
                          name="telephoneNumber"
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
                          color="success"
                          className="mb-3"
                          type="submit"
                          onClick={this.handleTelephone}
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
                        <MDBCardHeader className="form-header tempting-azure-gradient rounded mb-30">
                          <h3 className="my-3-white">BILLING</h3>
                        </MDBCardHeader>
                        <div style={{ marginTop: 20 }}>
                          <MDBListGroup>
                            <MDBListGroupItem>
                              <div style={style.left}>Telephone Number</div>
                              <div style={style.right}>{this.state.telephoneNumber}</div>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                              <div style={style.left}>Customer Name</div>
                              <div style={style.right}>{this.state.nameCustomer}</div>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                              <div style={style.left}>Payment Period</div>
                              <div style={style.right}>{this.state.paymentPeriod}</div>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                              <div style={style.left}>Bill Amount</div>
                              <div style={style.right}>{this.state.billAmount}</div>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                              <div style={style.left}>Admin Fee</div>
                              <div style={style.right}>Rp 5.000,00</div>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                              <div style={style.left}>Status</div>
                              <div style={style.right}>{this.state.status}</div>
                            </MDBListGroupItem>
                          </MDBListGroup>
                          <div className="text-center mt-4">
                            <MDBBtn
                              color="success"
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
              <PaymentInvoice pay={this.state.showInvoice} telephoneNumber={this.state.telephoneNumber} nameCustomer={this.state.nameCustomer} 
               paymentPeriod={this.state.paymentPeriod} billAmount={this.state.billAmount} status={this.state.status}
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
  passwordnya: state.login.password
})

export default connect(mapStateToProps)(Telephone);

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
