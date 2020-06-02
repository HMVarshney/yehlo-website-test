import React, { Component } from "react";
import { Container, Jumbotron, Button, Col, Row } from "reactstrap";

//components
import AutoCarousel from "../components/AutoCarousel";
import Carousel from "../components/Carousel";
import ProductCardB from "../components/ProductCardB";

//styles
import styles from "../css/home.module.css";
import "../css/home.css";

class Home extends Component {
  render() {
    return (
      <>
        <Jumbotron className='listings-container'>
          <div className='listings-jumbotron container mt-5'>
                  <div className='row justify-content-center'>
                      <div className='col-12 col-sm-6'>
                          <h3 className='listings-jumbotron-text'>YEHLO</h3>
                          <hr />
                      </div>
                  </div>
              </div>
          </Jumbotron>
        <Container className={styles.contain} style={{ paddingTop: "40px" }}>
          <div
            className={styles.alignment}
            style={{ justifyContent: "space-between" }}
          >
            <h1 className="display-4">Yehlo Premium</h1>
            <Button>Explore</Button>
          </div>
          <AutoCarousel style={{ margin: "0" }} />
        </Container>
        <Container
          fluid={true}
          style={{
            backgroundColor:'black',
            marginTop: "8px",
            color: "white",
          }}
        >
          <Container className={styles.contain}>
            <div style={{ marginBottom: "14px" }}>
              <div
                className={styles.alignment}
                style={{ justifyContent: "space-between" }}
              >
                <h1 className="display-4">Yehlo Pgs</h1>
              </div>
              <p className={styles.textBlock}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                magnam nam dolorem dolore expedita voluptatum, voluptates
                obcaecati necessitatibus officiis fugiat veniam? Facilis
                excepturi vitae culpa ipsam explicabo ducimus unde fugiat.
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  zIndex: 5,
                  position: "absolute",
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.3) 100%)",
                }}
              ></div>
              <Row
                lg={4}
                md={3}
                sm={2}
                xs={2}
                style={{ color: "black", marginTop: "24px" }}
              >
                <Col className="mt-4">
                  <ProductCardB />
                </Col>
                <Col className="mt-4">
                  <ProductCardB />
                </Col>
                <Col className="mt-4">
                  <ProductCardB />
                </Col>
                <Col className="mt-4">
                  <ProductCardB />
                </Col>
                <Col className="hideSm mt-4">
                  <ProductCardB />
                </Col>
                <Col className="hideSm mt-4">
                  <ProductCardB />
                </Col>
                <Col className="hideMd mt-4">
                  <ProductCardB />
                </Col>
                <Col className="hideMd mt-4">
                  <ProductCardB />
                </Col>
              </Row>
              <br />
            </div>
            <div className={styles.exploreShadow}>
              <Button>Explore</Button>
            </div>
          </Container>
        </Container>
        <Container className={styles.contain}>
          <div style={{ marginBottom: "14px" }}>
            <div
              className={styles.alignment}
              style={{ justifyContent: "space-between" }}
            >
              <h1 className="display-4">Yehlo Services</h1>
              <Button>Explore</Button>
            </div>
            <p className={styles.textBlock}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              magnam nam dolorem dolore expedita voluptatum, voluptates
              obcaecati necessitatibus officiis fugiat veniam? Facilis excepturi
              vitae culpa ipsam explicabo ducimus unde fugiat.
            </p>
          </div>
          <Carousel />
        </Container>
        <Container
          fluid={true}
          style={{
            backgroundColor: 'black',
            marginTop: "8px",
            minHeight: "100vh",
            color: "white",
          }}
        >
          <Container className={styles.contain}>
            <div style={{ marginBottom: "14px" }}>
              <div
                className={styles.alignment}
                style={{ justifyContent: "space-between" }}
              >
                <h1 className="display-4">Yehlo Buy</h1>
              </div>
              <p className={styles.textBlock}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                magnam nam dolorem dolore expedita voluptatum, voluptates
                obcaecati necessitatibus officiis fugiat veniam? Facilis
                excepturi vitae culpa ipsam explicabo ducimus unde fugiat.
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  zIndex: 5,
                  position: "absolute",
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.3) 100%)",
                }}
              ></div>
              <Row
                lg={4}
                md={3}
                sm={2}
                xs={2}
                style={{ color: "black", marginTop: "24px" }}
              >
                <Col className="mt-4">
                  <ProductCardB />
                </Col>
                <Col className="mt-4">
                  <ProductCardB />
                </Col>
                <Col className="mt-4">
                  <ProductCardB />
                </Col>
                <Col className="mt-4">
                  <ProductCardB />
                </Col>
                <Col className="hideSm mt-4">
                  <ProductCardB />
                </Col>
                <Col className="hideSm mt-4">
                  <ProductCardB />
                </Col>
                <Col className="hideMd mt-4">
                  <ProductCardB />
                </Col>
                <Col className="hideMd mt-4">
                  <ProductCardB />
                </Col>
              </Row>
              <br />
            </div>
            <div className={styles.exploreShadow}>
              <Button>Explore</Button>
            </div>
          </Container>
        </Container>
      </>
    );
  }
}

export default Home;
