import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { connect } from "react-redux";
import {setLogout} from "../../Redux/Action/index";
import axios from "axios";
import swal from "sweetalert";
import { Link } from 'react-router-dom';

class NavigationTop extends Component {
    state = {
        message: "",
        collapse: false
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    handleLogout = () => {
        const usernamenya = this.props.usernya;
        const pwdnya = this.props.passwordnya;
        this.props.isLogout();
        axios.post(`/logout`, {
            username: usernamenya,
            password: pwdnya,
          })
          .then((response) => {
            this.setState({
                ...this.state,
              isLogin: true,
              message: response.data.message
            });
          })
          .catch((err) => {
            console.log("Oops, request failed!")
            swal("Oops!", err, "error")
          })
    }

    render() {
        return (
            <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
                <MDBNavbarBrand href="/">
                    <strong>Eye Bank</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick = { this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink to="#">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a rel="noopener noreferrer" className="nav-link Ripple-parent" href="#" target="_blank">About EyeBank</a>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="#"><MDBIcon icon="comment" /> Messages</a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="nav-link navbar-link ml-2" rel="noopener noreferrer" target="_blank" href="#"><MDBIcon icon="bell" /> Notifications</a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link to="/">
                                <button className="border border-light rounded mr-1 nav-link Ripple-parent ml-2" rel="noopener noreferrer" onClick={this.handleLogout}><MDBIcon icon="sign-out-alt" className="mr-2" />Logout</button>
                            </Link>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

const mapStateToProps = (state) => ({
    statusLogin: state.main.isLogin,
    usernya: state.login.username,
    passwordnya: state.login.password
})

const mapDispatchToProps = (dispatch) => ({
    isLogout: () => dispatch(setLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationTop);