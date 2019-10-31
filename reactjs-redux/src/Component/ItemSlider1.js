import React, { Component } from "react";
import { connect } from "react-redux";
import ItemsCarousel from "react-items-carousel";
import { Card, Button, Badge } from "react-bootstrap";

class ItemSlider1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemIndex: 0,
      cartdata: []
    };
  }

  render() {
    const { carddata, readmoreModal } = this.props;
    const chevronWidth = 40;
    return (
      <div style={{ padding: `0 ${chevronWidth}px` }}>
        <div style={{ fontWeight: "bold", fontSize: 26 }}>New Arrivals</div>
        <ItemsCarousel
          requestToChangeActive={value => {
            this.setState({
              activeItemIndex: value
            });
          }}
          activeItemIndex={this.state.activeItemIndex}
          numberOfCards={5}
          gutter={20}
          leftChevron={<Button variant="secondary">{"<"}</Button>}
          rightChevron={<Button variant="secondary">{">"}</Button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {carddata.map((data, index) => (
            <Card style={{ height: 300, width: 200 }}>
              <Card.Img variant="top" src={require("../images/card1.jpg")} />
              <Card.Body
                style={{
                  textAlign: "center",
                  backgroundColor: "#343a40",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  padding: "1rem",
                  fontWeight: "bold"
                }}
              >
                <Card.Title style={{ marginBottom: 0, fontSize: 16 }}>
                  {data.name}
                </Card.Title>
                <Card.Text>
                  <small>Price : {data.price}</small>
                  <br />
                  <Button
                    variant="outline-light"
                    size="sm"
                    style={{ marginTop: 2 }}
                    onClick={() => {
                      this.props.addtocartaction(data);
                      this.setState({
                        cartdata: [...this.state.cartdata, data]
                      });
                    }}
                  >
                    {this.state.cartdata.includes(data)
                      ? "Add Quantity" + "  "
                      : "Add to Cart"}
                    <span>
                      {(() => {
                        var a = this.props.cartdata.filter(
                          item => item.id === data.id
                        );
                        if (a != null) {
                          return (
                            <Badge variant="danger">
                              {a.map(item => item.quantity)}
                            </Badge>
                          );
                        } else {
                          return <p></p>;
                        }
                      })()}
                    </span>
                  </Button>
                  <Button
                    variant="outline-light"
                    size="sm"
                    style={{ marginTop: 5 }}
                    onClick={() => readmoreModal(true, data)}
                  >
                    Read more >
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </ItemsCarousel>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cartdata: state.cartdata
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addtocartaction: cartdata => {
      const action = { type: "ADDTOCARTACTION", cartdata };
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemSlider1);
