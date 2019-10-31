import React, { Component } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBBtn,
  MDBInput,
  MDBIcon
} from "mdbreact";

class FooterPage extends Component {
  render() {
    return (
      <MDBFooter
        style={{ backgroundColor: "#343a40", color: "white", marginTop: 10 }}
      >
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="4">
              <ul>
                <li className="list-unstyled">
                  <a href="#!">About Us</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Contact Us</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Terms and Conditons</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="4">
              <div>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">About Us</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Contact Us</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Terms and Conditons</a>
                  </li>
                </ul>
                <div>
                  <MDBBtn size="lg" tag="a" floating social="fb">
                    <MDBIcon fab icon="facebook-f" />
                  </MDBBtn>
                  <MDBBtn size="lg" tag="a" floating social="tw">
                    <MDBIcon fab icon="twitter" />
                  </MDBBtn>
                  <MDBBtn size="lg" tag="a" floating social="li">
                    <MDBIcon fab icon="linkedin-in" />
                  </MDBBtn>
                  <MDBBtn size="lg" tag="a" floating social="ins">
                    <MDBIcon fab icon="instagram" />
                  </MDBBtn>
                </div>
              </div>
            </MDBCol>
            <MDBCol md="2">
              <div>
                SUBSCRIBE TO OUR NEWSLETTER
                <div>
                  <MDBInput type="email" placeholder="Subscribe" />
                  <MDBBtn
                    style={{ backgroundColor: "white", marginTop: "5px" }}
                  >
                    Subscribe
                  </MDBBtn>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.JayaKar.com"> JayaKar.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default FooterPage;
