import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol, MDBCardText } from 'mdbreact';
import {connect} from "react-redux";
import axios from "axios";

class AdminCardSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uangnya : "",
    };
  }

  componentDidMount(){
    const usernamenya = this.props.usernya;
    const pwdnya = this.props.passwordnya;
    // console.log(usernamenya)
    // console.log(pwdnya)

    axios.post(`/balance`, {
      username: usernamenya,
      password: pwdnya,
    })
    .then((response) => {
      this.setState({
        ...this.state,
        uangnya: this.FormatCurrency(response.data.message.Balance)
      })
      this.FormatCurrency(response.data.message.Balance)
      console.log(response.data.message)
    })
    .catch((err) => {
      console.log("Oops, " + err)
    })
  }

  FormatCurrency = (uang) => {
    var amount = parseFloat(uang);
    return amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  }

  render() {
    return (
      <MDBRow className="mb-4" style={{backgroundColor:'#F0F2F5'}}>
      <MDBCol xl="4" md="6" className="mb-r">
        <MDBCard className="cascading-admin-card">
            <div className="admin-up">
            <MDBIcon icon="money-bill-alt" className="primary-color"/>
              <div className="data">
                <p style={{textTransform: "uppercase"}}>{this.props.usernya}'s AVAILABLE MONEY</p>
                <h4>
    <strong>{this.state.uangnya}</strong>
                </h4>
              </div>
            </div>
            <MDBCardBody>
              <div className="progress">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-primary" role="progressbar"
                  style={{width: '100%'}}></div>
              </div>
              {/* <MDBCardText>Better than last week (25%)</MDBCardText> */}
            </MDBCardBody>
          </MDBCard>
      </MDBCol>
      <MDBCol xl="4" md="6" className="mb-r">
        <MDBCard className="cascading-admin-card">
            <div className="admin-up">
            <MDBIcon icon="chart-line" className="warning-color"/>
              <div className="data">
                <p>SAVINGS</p>
                <h4>
                  <strong>88.75%</strong>
                </h4>
              </div>
            </div>
            <MDBCardBody>
              <div className="progress">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg warning-color" role="progressbar"
                  style={{width: '88.75%'}}></div>
              </div>
              {/* <MDBCardText>Worse than last week (25%)</MDBCardText> */}
            </MDBCardBody>
          </MDBCard>
      </MDBCol>
      <MDBCol xl="4" md="6" className="mb-r">
        <MDBCard className="cascading-admin-card">
            <div className="admin-up">
            <MDBIcon icon="info-circle" className="red accent-2"/>
              <div className="data">
                <p>INFORMATION</p>
                <h4 style={{color:'white'}}>
                  <strong>1</strong>
                </h4>
              </div>
            </div>
            <MDBCardBody>
              {/* <div className="progress">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-primary" role="progressbar"
                  style={{width: '100%'}}></div>
              </div> */}
              <MDBCardText>Did you know that transfers in our bank arrive immediately?</MDBCardText>
            </MDBCardBody>
          </MDBCard>
      </MDBCol>
    </MDBRow>
    );
  }
}

const mapStateToProps = (state) => ({
  usernya: state.login.username,
  passwordnya: state.login.password
})

export default connect(mapStateToProps)(AdminCardSection);