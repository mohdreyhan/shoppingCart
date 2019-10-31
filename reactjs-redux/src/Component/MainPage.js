import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import CarouselPage from "./CarouselPage";
import NavbarPage from "./NavbarPage";
import FooterPage from "./FooterPage";
import ItemSlider1 from "./ItemSlider1";
import ReadMore from "./ReadMore";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readmoreshow: false,
      readmoredata: []
    };
  }

  // cardvalues = () => {
  //   fetch("http://localhost:3000/cardvalues")
  //     .then(response => response.blob())
  //     .then(function(myBlob) {
  //       var objectURL = URL.createObjectURL(myBlob);
  //       var myImage = objectURL;
  //       console.log("piccc==", myImage);
  //       this.setState({ pic: myImage });
  //     });
  //   console.log("piccc==", this.state.pic);
  // };
  logout = (email, event) => {
    event.preventDefault();
    fetch("http://localhost:3000/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 200) {
          localStorage.clear();
          this.props.emptyverifyuser();
          return this.props.history.replace({
            pathname: "/"
          });
        } else if (response.status === 400) {
          this.setState({ signerrmsg: response.message });
        }
      });
  };

  componentDidMount() {
    fetch("http://localhost:3000/cardvalues", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(res => {
        this.props.cardvalues(res);
      });
  }

  readmoreModal = (res, data) => {
    this.setState({
      readmoreshow: res,
      readmoredata: data
    });
    
  };

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
              <div>
                <div style={{ marginBottom: 70 }}>
                  <NavbarPage
                    cartdata={this.props.cartdata}
                    logout={this.logout}
                  />
                </div>
                <Container>
                  <Row>
                    <Col sm={12}>
                      <CarouselPage />
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={12}>
                      <ItemSlider1
                        carddata={this.props.carddata}
                        cartdata={this.props.cartdata}
                        readmoreModal={this.readmoreModal}
                      />
                    </Col>
                  </Row>
                  <ReadMore
                    readmoreshow={this.state.readmoreshow}
                    readmoreModal={this.readmoreModal}
                    readmoredata={this.state.readmoredata}
                  />
                  <FooterPage />
                </Container>
              </div>
            );
          }
        })()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    carddata: state.carddata,
    cartdata: state.cartdata,
    verifyuser: state.verifyuser,

  };
}

function mapDispatchToProps(dispatch) {
  return {
    cardvalues: carddata => {
      const action = { type: "CARDVALUES", carddata };
      dispatch(action);
    },
    emptyverifyuser: () => {
      const action = { type: "EMPTYVERIFYUSER" };
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
