import React from "react";
import { MDBRow, MDBCol, MDBBtn, MDBContainer } from "mdbreact";
import axios from "axios";
import { connect } from "react-redux";
import { dataAPI } from "../../../Redux/Action/index";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      no_account: '',
      email: "",
      no_phone: "",
      username: "",
      password: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  saveData = () => {
    const {name, no_account, no_phone} = this.state;
    this.props.input({name, no_account, no_phone})
  }

  componentDidMount() {
    const usernamenya = this.props.usernya;
    const pwdnya = this.props.passwordnya;
    // console.log(usernamenya);
    // console.log(pwdnya);

    axios
      .post(`/cprofile`, {
        username: usernamenya,
        password: pwdnya,
      })
      .then((response) => {
        console.log(response.data);
        // console.log(response.data.message);
        // console.log(response.data.message + " INI");
        this.setState({
          ...this.state,
          name: response.data.message.Name,
          no_account: response.data.message.NoAccount,
          no_phone : response.data.message.Phone,
          email: response.data.message.Email,
          username: response.data.message.Username,
          password: response.data.message.Password,
        });
        // console.log("test here")
        // console.log(response.data.message)
        // console.log(response)
        this.saveData();      
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div style={{ backgroundColor: "#F0F2F5", borderRadius: 5 }}>
        <MDBContainer style={{ padding: 20 }}>
          <form
            className="needs-validation"
            onSubmit={this.submitHandler}
            noValidate
          >
            <MDBRow>
              <MDBCol md="4" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
                  Name
                </label>
                <input
                  value={this.state.name}
                  name="name"
                  type="text"
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  disabled
                />
                <div className="valid-feedback">Looks good!</div>
              </MDBCol>
              <MDBCol md="4" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterEmailEx2"
                  className="grey-text"
                >
                  Account Number
                </label>
                <input
                  value={this.state.no_account}
                  name="no_account"
                  type="text"
                  id="defaultFormRegisterEmailEx2"
                  className="form-control"
                  disabled
                />
                <div className="valid-feedback">Looks good!</div>
              </MDBCol>
              <MDBCol md="4" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterPasswordEx4"
                  className="grey-text"
                >
                  Phone
                </label>
                <input
                  value={'0'+this.state.no_phone}
                  type="text"
                  id="defaultFormRegisterPasswordEx4"
                  className="form-control"
                  name="no_phone"
                  placeholder="Phone"
                  disabled
                />
                <div className="invalid-feedback">
                  Please provide a valid phone.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="4" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterConfirmEx3"
                  className="grey-text"
                >
                  Email
                </label>
                <input
                  value={this.state.email}
                  onChange={this.changeHandler}
                  type="email"
                  id="defaultFormRegisterConfirmEx3"
                  className="form-control"
                  name="email"
                  placeholder="Your Email address"
                  disabled
                />
              </MDBCol>

              <MDBCol md="4" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterPasswordEx4"
                  className="grey-text"
                >
                  Username
                </label>
                <input
                  value={this.state.username}
                  onChange={this.changeHandler}
                  type="text"
                  id="defaultFormRegisterPasswordEx4"
                  className="form-control"
                  name="username"
                  placeholder="Username"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid username.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBCol>
              <MDBCol md="4" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterPasswordEx4"
                  className="grey-text"
                >
                  Password
                </label>
                <input
                  value={this.state.password}
                  onChange={this.changeHandler}
                  type="password"
                  id="defaultFormRegisterPasswordEx4"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid password.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBCol>
            </MDBRow>
            <MDBBtn color="primary" size="lg" type="submit">
              Save Data
            </MDBBtn>
          </form>
        </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  usernya: state.login.username,
  passwordnya: state.login.password,
});

const mapDispatchToProps = (dispatch) => ({
  input: (data) => dispatch(dataAPI(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
