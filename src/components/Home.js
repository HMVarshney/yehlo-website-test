import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import SkeletonLoader from "./Preloaders/skeletonLoader";

//components
import AutoCarousel from "./Carousel/AutoCarousel";
import Carousel from "./Carousel/Carousel";
import CategoryCarousel from "./Carousel/CategoryCarousel";
import PremiumCarousel from "./Carousel/PremiumCarousel";
import SearchBar from "./Search/searchBar";

//styles
import styles from "../css/home.module.css";
import "../css/home.css";

//context
import { MainContext } from "../context/context-provider/mainContext";



class Home extends Component {
  static contextType = MainContext;
  render() {
    let { partner, sponsered, premium, pg, gym, buy } = this.context;
    return (
      <div className="home">
        <div className={styles.billBoard}>
          <Container
            style={{
              position: "relative",
              height: "inherit",
            }}
          >
            <div className={styles.centerBlock}>
              <SearchBar />
              <div className={styles.centerBrand}>YEH!O</div>
            </div>
          </Container>
        </div>
        <Container className={styles.contain}>
          <div style={{ marginBottom: "14px" }} className="mt-4">
            <div
              className={styles.alignment}
              style={{ justifyContent: "start", padding: "0 15px" }}
            >
              <h2>What can we help you find ?</h2>
            </div>
          </div> 
          <CategoryCarousel />
        </Container>
        <Container className={styles.contain}>
          <div style={{ marginBottom: "14px" }}>
            <div
              className={styles.alignment}
              style={{ justifyContent: "start", padding: "0 15px" }}
            >
              <h2>Yehlo Partners</h2>
            </div>
          </div>
          {partner.length? <AutoCarousel style={{ margin: "0" }} items={partner} />: <SkeletonLoader number={3} />}
          <div className={styles.alignment}>
            <div className="col-xs-12 col-sm-8 col-md-6 col-lg-3 mb-5">
              <Button href='/listings/partner' outline color="secondary" className={styles.seeMore}>
                See More
              </Button>
            </div>
          </div>
        </Container>
        <Container className={styles.contain}>
          <div style={{ marginBottom: "14px" }}>
            <div
              className={styles.alignment}
              style={{ justifyContent: "start", padding: "0 15px" }}
            >
              <h2>Yehlo Sponsored</h2>
            </div>
          </div>
          {sponsered.length ? <AutoCarousel style={{ margin: "0" }} items={sponsered} />: <SkeletonLoader number={3} />}
          <div className={styles.alignment}>
            <div className="col-xs-12 col-sm-8 col-md-6 col-lg-3 mb-5">
              <Button href='/listings/sponsered' outline color="secondary" className={styles.seeMore}>
                See More
              </Button>
            </div>
          </div>
        </Container>
        <Container className={styles.contain}>
          <div style={{ marginBottom: "14px" }}>
            <div
              className={styles.alignment}
              style={{ justifyContent: "start", padding: "0 15px" }}
            >
              <h2>Yehlo Premium</h2>
            </div>
          </div>
          {premium.length ? <PremiumCarousel style={{ margin: "0" }} items={premium} />: <SkeletonLoader number={4} />}
          <div className={styles.alignment}>
            <div className="col-xs-12 col-sm-8 col-md-6 col-lg-3 mb-5">
              <Button href='/listings/premium' outline color="secondary" className={styles.seeMore}>
                See More
              </Button>
            </div>
          </div>
        </Container>
        <Container className={styles.contain}>
          <div style={{ marginBottom: "14px" }}>
            <div
              className={styles.alignment}
              style={{ justifyContent: "start", padding: "0 15px" }}
            >
              <h2>Yehlo Buy</h2>
            </div>
          </div>
          {buy.length ? <Carousel items={buy} /> : <SkeletonLoader number={4} />}
          <div className={styles.alignment}>
            <div className="col-xs-12 col-sm-8 col-md-6 col-lg-3 mb-5">
              <Button href='/listings/second hand' outline color="secondary" className={styles.seeMore}>
                See More
              </Button>
            </div>
          </div>
        </Container>
        <Container className={styles.contain}>
          <div style={{ marginBottom: "14px" }}>
            <div
              className={styles.alignment}
              style={{ justifyContent: "start", padding: "0 15px" }}
            >
              <h2>Yehlo Pgs</h2>
            </div>
          </div>
          {pg.length ? <Carousel items={pg} /> : <SkeletonLoader number={4} />}
          <div className={styles.alignment}>
            <div className="col-xs-12 col-sm-8 col-md-6 col-lg-3 mb-5">
              <Button href='/listings/pg' outline color="secondary" className={styles.seeMore}>
                See More
              </Button>
            </div>
          </div>
        </Container>
        <Container className={styles.contain}>
          <div style={{ marginBottom: "14px" }}>
            <div
              className={styles.alignment}
              style={{ justifyContent: "start", padding: "0 15px" }}
            >
              <h2>Yehlo Gyms</h2>
            </div>
          </div>
          {gym.length ? <Carousel items={gym} /> : <SkeletonLoader number={4} />}
          <div className={styles.alignment}>
            <div className="col-xs-12 col-sm-8 col-md-6 col-lg-3 mb-5">
              <Button href='/listings/gym' outline color="secondary" className={styles.seeMore}>
                See More
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
