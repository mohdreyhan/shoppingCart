import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default class ModalLogin extends Component {
  render() {
    const {
      modalLoginShow,
      modalSignup,
      onChangeverify,
      verifyuser,
      loginVerify,
      loginerrmsg
    } = this.props;
    return (
      <Modal show={modalLoginShow} centered>
        <Modal.Header style={{ background: "#6c757d", color: "white" }}>
          <Modal.Title>LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                onChange={onChangeverify}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={onChangeverify}
              />
            </Form.Group>
            <center>
              <Button
                style={{ marginTop: "15px" }}
                variant="secondary"
                type="submit"
                onClick={event => loginVerify(verifyuser, event)}
              >
                Log In
              </Button>
            </center>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ background: "#6c757d", color: "white" }}>
          Not a user ?
          <Button
            variant="secondary"
            type="submit"
            onClick={() => modalSignup(true, false)}
          >
            Sign Up
          </Button>
          <div> {loginerrmsg}</div>
        </Modal.Footer>
      </Modal>
    );
  }
}
