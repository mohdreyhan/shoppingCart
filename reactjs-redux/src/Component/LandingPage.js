import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import ModalLogin from "./ModalLogin";
import ModalsignUp from "./ModalsignUp";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signSucessMsg:"",
      signerrmsg: "",
      loginerrmsg: ""
    };
  }

  signup = (addtouser, event) => {
    event.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addtouser)
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 200) {
          this.setState({
            signSucessMsg : response.message
          })
          return this.props.history.replace({
            pathname: "/"
          });
        } else if (response.status === 400) {
          this.setState({ signerrmsg: response.message });
        }
      });
  };

  loginVerify = (verifyuser, event) => {
    event.preventDefault();
    fetch("http://localhost:3000/loginVerify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(verifyuser)
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem("email", response.email);
          localStorage.setItem("token", response.token);
          var val = localStorage.getItem("token");
          if (val === "") {
            return this.props.history.replace({
              pathname: "/"
            });
          } else {
            return this.props.history.replace({
              pathname: "/home"
            });
          }
        } else if (response.status === 401) {
          this.setState({ loginerrmsg: response.message });
        } else if (response.status === 400) {
          this.setState({ loginerrmsg: response.message });
        } else {
          const message =
            response.message !== undefined
              ? response.message
              : "Unknown error recevied";
          this.setState({ loginerrmsg: message });
        }
      });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <ModalLogin
                modalSignup={this.props.modalSignup}
                modalLoginShow={this.props.modalLoginShow}
                verifyuser={this.props.verifyuser}
                onChangeverify={this.props.onChangeverify}
                loginVerify={this.loginVerify}
                loginerrmsg={this.state.loginerrmsg}
              />
              <ModalsignUp
                modalsignupShow={this.props.modalsignupShow}
                modalLogin={this.props.modalLogin}
                onChangesignup={this.props.onChangesignup}
                addtouser={this.props.addtouser}
                signup={this.signup}
                signerrmsg={this.state.signerrmsg}
                signSucessMsg = {this.state.signSucessMsg}
              />
            </Col>
            <Col sm={2}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    modalLoginShow: state.modalLoginShow,
    modalsignupShow: state.modalsignupShow,
    addtouser: state.addtouser,
    verifyuser: state.verifyuser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalLogin: (logincondition, signupcondition) => {
      const action = { type: "MODALLOGIN", logincondition, signupcondition };
      dispatch(action);
    },
    modalSignup: (signupcondition, logincondition) => {
      const action = { type: "MODALSIGNUP", signupcondition, logincondition };
      dispatch(action);
    },
    onChangesignup: event => {
      event.preventDefault();
      const name = event.target.name;
      const value = event.target.value;
      const action = { type: "ONCHANGESIGNUP", name, value };
      dispatch(action);
    },
    onChangeverify: event => {
      event.preventDefault();
      const name = event.target.name;
      const value = event.target.value;
      const action = { type: "ONCHANGEVERIFY", name, value };
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
