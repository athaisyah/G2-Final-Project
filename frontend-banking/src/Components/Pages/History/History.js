import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBView,
  MDBCard,
  MDBCardBody,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdbreact";
import { connect } from "react-redux";
import { dataAPI } from "../../../Redux/Action/index";
import axios from "axios";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTransaction: [],
    };
  }

  componentDidMount() {
    const nm = this.props.namenya;
    const acc = this.props.no_accountnya;
    const phn = this.props.no_phonenya;
    // console.log("SEND TO " + nm + acc + phn);

    axios
      .post(`/getTransaction`, {
        name: nm,
        no_account: acc,
        no_phone: phn 
      })
      .then((response) => {
        console.log(response.data);
        this.setState({
          ...this.state,
          dataTransaction: response.data,
        });
        // console.log("test here")
        // console.log(response.data)
        // console.log(response)      
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    return (
      <div>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard className="mt-2">
              <MDBView className="gradient-card-header blue darken-2">
                <h4 className="h4-responsive text-white">Account Activity</h4>
              </MDBView>
              <MDBCardBody>
                <h3 className="text-left">
                  <strong>All Transactions</strong>
                </h3>
                <p>
                  The payment history of an account over a specific period of
                  time, including the number of times the account was past due
                  or over limit.
                </p>
                <MDBTable>
                  <MDBTableHead>
                    <tr>
                      <th style={{ fontWeight: "bold" }}>#</th>
                      <th style={{ fontWeight: "bold" }}>Sender</th>
                      <th style={{ fontWeight: "bold" }}>Recipient</th>
                      <th style={{ fontWeight: "bold" }}>Amount Money</th>
                      <th style={{ fontWeight: "bold" }}>Transfer title</th>
                      <th style={{ fontWeight: "bold" }}>Date</th>
                      <th style={{ fontWeight: "bold" }}>Confirmation</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {this.state.dataTransaction.map((dt, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{dt.sender_name}</td>
                        <td>{dt.recipient_name}</td>
                        <td>Rp {dt.amount_money}.-</td>
                        <td>{dt.description}</td>
                        <td>{dt.date}</td>
                        <td>{dt.status}</td>
                      </tr>
                    ))}
                    {/* <tr>
                      <td>1</td>
                      <td>Aisah</td>
                      <td>Otto</td>
                      <td>Rp 500,000.-</td>
                      <td>Bonus</td>
                      <td>1 November 2020</td>
                      <td>Complete</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Samirah</td>
                      <td>Thornton</td>
                      <td>Rp 500,000.-</td>
                      <td>Bonus</td>
                      <td>4 November 2020</td>
                      <td>Complete</td>
                    </tr> */}
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  namenya: state.data.name,
  no_accountnya: state.data.no_account,
  no_phonenya: state.data.no_phone
})

export default connect(mapStateToProps)(History);
