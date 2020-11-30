import React from 'react';
import { MDBFooter, MDBIcon } from 'mdbreact';

const Footer = () => {
    return (
        <MDBFooter color="blue" className="ft text-center font-small darken-2 fixed-bottom">
            <div className="pt-4">
                {/* <MDBBtn outline color="white" tag="a" href="#" target="_blank">Profile<MDBIcon icon="download" className="ml-2"/></MDBBtn>
                <MDBBtn outline color="white" tag="a" href="#" target="_blank">Settings<MDBIcon icon="graduation-cap" className="ml-2"/></MDBBtn>
                <hr className="my4"/> */}
            </div>
            <div className="pb-4">
                <MDBIcon fab icon="facebook" className="mr-3"/>
                <MDBIcon fab icon="twitter" className="mr-3"/>
                <MDBIcon fab icon="youtube" className="mr-3"/>
                <MDBIcon fab icon="google-plus" className="mr-3"/>
                <MDBIcon fab icon="dribbble" className="mr-3"/>
                <MDBIcon fab icon="pinterest" className="mr-3"/>
                <MDBIcon fab icon="github" className="mr-3"/>
                <MDBIcon fab icon="codepen" className="mr-3"/>
            </div>
            <p className="footer-copyright mb-0 py-3 text-center">
                &copy; 2020 Copyright: <a href="#"> Eye Bank </a>
            </p>
        </MDBFooter>
    );
}

export default Footer;