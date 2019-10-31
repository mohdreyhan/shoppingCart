import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default class ModalsignUp extends Component {
  render() {
    const {
      modalsignupShow,
      modalLogin,
      onChangesignup,
      addtouser,
      signup,
      signerrmsg,
      signSucessMsg
    } = this.props;
    return (
      <Modal show={modalsignupShow}>
        <Modal.Header style = {{background : "#6c757d", color : "white"}}>
          <Modal.Title>SIGNUP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                onChange={onChangesignup}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                onChange={onChangesignup}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                placeholder="Enter Password"
                name="password"
                onChange={onChangesignup}
              />
            </Form.Group>
            <Button
            style={{ marginRight: "15px", marginTop: "15px" }}
            variant="secondary"
            type="submit"
            onClick={(event) => signup(addtouser,event)}
          >
            Sign Up
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer style = {{background : "#6c757d", color : "white"}}>
          Already a user ?
          <Button
            variant="secondary"
            type="submit"
            onClick={() => modalLogin(true, false)}
          >
            Log In
          </Button>
          <div>{signerrmsg}</div>
          <div>{signSucessMsg}</div>
        </Modal.Footer>
      </Modal>
    );
  }
}
