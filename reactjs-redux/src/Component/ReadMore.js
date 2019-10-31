import React, { Component } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";

export default class ReadMore extends Component {
  render() {
    const { readmoreModal, readmoreshow, readmoredata } = this.props;

    return (
      <Modal show={readmoreshow} centered size="lg">
        <Modal.Header style = {{ backgroundColor : "#343a40" , color : "white"}}>
          <Modal.Title>{readmoredata.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <img
                  src={require("../images/card1.jpg")}
                  style={{ width: 200, height: 180 }}
                />
              </Col>
              <Col xs={12} md={8}>
                <p>Item Id : {readmoredata.id}</p>
                <p> Price : {readmoredata.price}</p>
                <p> Description : {readmoredata.description}</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer style = {{backgroundColor : "#343a40" , color : "white"}}>
          <Button
            variant="outline-light"
            onClick={() => readmoreModal(false, readmoredata)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
