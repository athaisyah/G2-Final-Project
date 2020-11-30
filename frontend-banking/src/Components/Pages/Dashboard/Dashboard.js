import React, { Component } from "react";
import { AdminCard, Breadcrumb } from "../../Sections/_index";
import { connect } from "react-redux";
import {setLogout} from "../../../Redux/Action/index";
import axios from "axios";
import swal from "sweetalert";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warningTime: 600000, // 300000ms = 5minute
      signoutTime: 60000, //30000ms = 30s
    };
  }

  UNSAFE_componentWillMount() {
    this.events = [
      'load',
      'mousemove',
      'mousedown',
      'click',
      'scroll',
      'keypress'
    ];

    for (var i in this.events) {
      window.addEventListener(this.events[i], this.resetTimeout);
    }

    this.setTimeout();
  }

  clearTimeoutFunc = () => {
    if (this.warnTimeout) clearTimeout(this.warnTimeout);

    if (this.logoutTimeout) clearTimeout(this.logoutTimeout);
  };

  setTimeout = () => {
    this.warnTimeout = setTimeout(this.warn, this.state.warningTime);
    this.logoutTimeout = setTimeout(this.logout, this.state.signoutTime);
  };

  resetTimeout = () => {
    this.clearTimeoutFunc();
    this.setTimeout();
  };

  warn = () => {
    // window.alert("You will be logged out automatically in 1 minute")
    swal("Session Expired", 'Your session has expired. Please log in again to continue using Eye-Bank Online.', 'warning')
    console.log('You will be logged out automatically in 1 minute.');
  };

  logout = () => {
    // Send a logout request to the API
    console.log("Sending a logout request to the API...");
    const usernamenya = this.props.usernya;
    const pwdnya = this.props.passwordnya;
    this.props.isLogout();
    axios.post(`/logout`, {
        username: usernamenya,
        password: pwdnya,
      })
      .then((response) => {
        // history.pushState('/')
        window.location.assign('/');
        // this.setState({
        //     ...this.state,
        //   isLogin: true,
        //   message: response.data.message
        // });
      })
      .catch((err) => {
        console.log("Oops, request failed!")
        swal("Oops!", err, "error")
      })
  };


  render() {
    return (
      <div>
        <Breadcrumb />
        <div className="justify-content-center">
          <AdminCard />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    usernya: state.login.username,
    passwordnya: state.login.password
})

const mapDispatchToProps = (dispatch) => ({
    isLogout: () => dispatch(setLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
