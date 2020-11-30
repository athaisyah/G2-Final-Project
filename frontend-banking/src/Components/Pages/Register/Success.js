import { Card } from "react-bootstrap";

function Success(props) {
  if (!props.success) {
    return null;
  }

  return (
    // <div className="card card-register mx-auto">
    <Card
      bg="success"
      text="white"
      className="mb-2"
    >
      <Card.Header style={{ textAlign: "center" }}>
        <Card.Title> CONGRATULATIONS! </Card.Title>
      </Card.Header>
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title> <i class="fas fa-check-circle fa-3x"></i> </Card.Title>
        <Card.Text style={{color:'white', textAlign:'center', fontSize: "20px"}}>
            Your Eye-Bank Internet Banking is Verified!
        </Card.Text>
        <Card.Text style={{color:'white', textAlign:'center'}}>
            You can start by login and ready to use Telephone Bill and Postpaid Phone Bill Payment.
        </Card.Text>
      </Card.Body>
    </Card>
    // </div>
  );
}

export default Success;
