import React, { Component } from "react";
import {
  Table,
  Button,
  Badge,
  Container,
  Card,
  Row,
  Col
} from "react-bootstrap";
import { connect } from "react-redux";

class CartPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {(() => {
          var value = localStorage.getItem("token");
          if (value === "") {
            return this.props.history.replace({
              pathname: "/"
            });
          } else {
            return (
              <Container>
                <Table responsive striped>
                  <TableHeader />
                  <TableBody
                  cartdata = {this.props.cartdata}
                    delfromcart={this.props.delfromcart}
                  />
                </Table>
                <Row>
                  <Col sm={8}></Col>
                  <Col sm={4}>
                    <GrandTotal cartdata = {this.props.cartdata} />
                  </Col>
                </Row>
              </Container>
            );
          }
        })()}
      </div>
    );
  }
}

const TableBody = props => {
  const rows = props.cartdata.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>image</td>
        <td>{item.name}</td>
        <td>
          <Badge variant="danger">{item.quantity}</Badge>
        </td>
        <td>{item.price}</td>
        <td>{item.price * item.quantity}</td>
        <td>
          <Button variant="light" onClick={() => props.delfromcart(item.id)}>
            X
          </Button>
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>;
};

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>No</th>
        <th>Item</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const GrandTotal = props => {
  var data = props.cartdata
  const len = data.length;
  var i;
  var total = 0;
  for (i = 0; i < len; i++) {
    total += parseInt(data[i].price * data[i].quantity);
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>Price Details</Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col sm={8}>Price ({data.length}items)</Col>
            <Col sm={4}>{total}</Col>
          </Row>
        </Container>
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col sm={8}>Amount Payable</Col>
          <Col sm={4}>{total}</Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    cartdata: state.cartdata
  };
}

function mapDispatchToProps(dispatch) {
  return {
    delfromcart: updatedcartdata => {
      const action = { type: "DELFROMCART", updatedcartdata };
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
