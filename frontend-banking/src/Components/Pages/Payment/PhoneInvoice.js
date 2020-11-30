import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem,
} from "mdbreact";

function PaymentInvoice(props) {
  if (!props.pay) {
    return null;
  }
  return (
    <MDBContainer className="mt-2">
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header sunny-morning-gradient rounded">
                <h3 className="my-3-white" style={{fontWeight:"bold", textAlign: "center"}}>Thanks for your Payment!</h3>
              </MDBCardHeader>
              <div style={{ marginTop: 20 }}>
                <MDBListGroup>
                  <MDBListGroupItem color="warning">
                    <div style={style.left}>Provider</div>
                    <div style={style.right}>{props.provider}</div>
                  </MDBListGroupItem>
                  <MDBListGroupItem>
                    <div style={style.left}>Phone Number</div>
                    <div style={style.right}>{props.handphoneNumber}</div>
                  </MDBListGroupItem>
                  <MDBListGroupItem color="warning">
                    <div style={style.left}>Payment Period</div>
                    <div style={style.right}>{props.paymentPeriod}</div>
                  </MDBListGroupItem>
                  <MDBListGroupItem>
                    <div style={style.left}>Bill Amount</div>
                    <div style={style.right}>{props.billAmount}</div>
                  </MDBListGroupItem>
                  <MDBListGroupItem color="warning">
                    <div style={style.left}>Admin Fee</div>
                    <div style={style.right}>Rp 5.000,00</div>
                  </MDBListGroupItem>
                </MDBListGroup>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default PaymentInvoice;

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
