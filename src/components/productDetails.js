import React, { useEffect, useContext, useState } from "react";
import { Paper, Avatar } from "@material-ui/core";
import SlickSlider from "./slider";

//icons
import Spinnerloader from "./Preloaders/spinnerLloader";

//styles
import "../css/productDetails.css";

//backend
import firebase from "../api/fbConfig";
import { MainContext } from "../context/context-provider/mainContext";

const ProductDetails = (props) => {
  const [productData, setProductData] = useState(null);
  const { buy, pg, gym } = useContext(MainContext);
  const category = props.match.params.category;
  useEffect(() => {
    async function fetchSeller(id) {
      return await firebase.firestore().doc(`users/${id}`).get();
    }
    async function product(subSection) {
      let productInfo = subSection.filter((product) => {
        return product.id === props.match.params.product_id;
      })[0];
      if (productInfo && productInfo.sellerId !== "") {
        await fetchSeller(productInfo.sellerId).then((doc) => {
          if (doc.exists) {
            productInfo.sellerImage = doc.data().image;
            productInfo.sellerName = doc.data().username;
          }
        });
      }
      return productInfo;
    }
    if (category === "pg") {
      product(pg).then((docData) => {
        setProductData(docData);
      });
    } else if (category === "second hand") {
      product(buy).then((docData) => {
        setProductData(docData);
      });
    } else if (category === "gym") {
      product(gym).then((docData) => {
        setProductData(docData);
      });
    }
  }, [pg, buy, gym, props.match.params.product_id, category]);

  if (productData) {
    var ratingData, guidelines;
    if (category !== "second hand") {
      ratingData = productData.ratings.map((rating) => {
        rating /= 5;
        rating *= 100;
        return rating;
      });

      guidelines = productData.rules.map((rule, index) => {
        return (
          <li>
            <div className="rule">{rule}</div>
          </li>
        );
      });
    }

    return (
      <>
        <div className="container contentIn">
          <div class="row justify-content-center">
            <div class="col-lg-9 col-md-10 col-12">
              <Paper elevation={4} style={{ padding: "30px" }}>
                <div className="gallery_box">
                  <SlickSlider images={productData.images} />
                </div>
              </Paper>
            </div>
          </div>

          <div className="row mt-5">
            <div
              className={
                productData.type === "Second Hand Product"
                  ? "col-md-12"
                  : "col-md-8"
              }
            >
              <Paper elevation={4} style={{ padding: "30px" }}>
                <div className="row mb-2">
                  <div
                    className="col-12 pb-3"
                    style={{ borderBottom: "1px solid #e5e9f7" }}
                  >
                    <h4 className="pt-1 pb-1">{productData.name}</h4>
                    <h5
                      className="details_price"
                      style={{ color: "rgba(0,0,0,0.7)" }}
                    >
                      <span className="fa fa-rupee-sign pr-1" />
                      {productData.price}
                      {category !== "second hand" ? " /month" : ""}
                    </h5>
                  </div>
                  <div
                    className="col-12 pt-3 pb-3"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      borderBottom: "1px solid #e5e9f7",
                    }}
                  >
                    <Avatar src={productData.sellerImage} alt="seller image" />
                    <div style={{ clear: "both" }} />
                    <div
                      style={{ display: "flex", flexDirection: "column" }}
                      className="ml-3"
                    >
                      <span style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                        {productData.sellerName}{" "}
                      </span>
                      <div style={{ clear: "both", marginTop: "-4px" }} />
                      <span>{productData.contact} </span>
                    </div>
                  </div>
                </div>
                {category === "second hand" ? (
                  ""
                ) : (
                  <div>
                    <p className="details_description_text pt-3">
                      {productData.description}
                    </p>
                    <div className="desc-guide pt-3">
                      <h5 className="pb-2">Guidelines</h5>
                      <ul>{guidelines}</ul>
                    </div>
                  </div>
                )}
              </Paper>
              {productData.type === "Second Hand Product" ? null : category ===
                "pg" ? (
                <Paper elevation={4} className="p-3 discription_box mt-3">
                  <div
                    class="row"
                    style={{
                      justifyContent: "space-evenly",
                      padding: "0 12px",
                    }}
                  >
                    <div className="amenity-box">
                      <div
                        className={`amenity-icon-${productData.amenities[0]}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M0 0h24v24H0V0zm0 0h24v24H0V0z"
                            fill="none"
                          />
                          <path d="M2.06 10.06c.51.51 1.32.56 1.87.1 4.67-3.84 11.45-3.84 16.13-.01.56.46 1.38.42 1.89-.09.59-.59.55-1.57-.1-2.1-5.71-4.67-13.97-4.67-19.69 0-.65.52-.7 1.5-.1 2.1zm7.76 7.76l1.47 1.47c.39.39 1.02.39 1.41 0l1.47-1.47c.47-.47.37-1.28-.23-1.59-1.22-.63-2.68-.63-3.91 0-.57.31-.68 1.12-.21 1.59zm-3.73-3.73c.49.49 1.26.54 1.83.13 2.44-1.73 5.72-1.73 8.16 0 .57.4 1.34.36 1.83-.13l.01-.01c.6-.6.56-1.62-.13-2.11-3.44-2.49-8.13-2.49-11.58 0-.69.5-.73 1.51-.12 2.12z" />
                        </svg>
                      </div>
                      <div>Wifi</div>
                    </div>
                    <div className="amenity-box">
                      <div
                        className={`amenity-icon-${productData.amenities[1]}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M21 11h-3.17l2.54-2.54c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0L15 11h-2V9l3.95-3.95c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0L13 6.17V3c0-.55-.45-1-1-1s-1 .45-1 1v3.17L8.46 3.63c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.03 0 1.42L11 9v2H9L5.05 7.05c-.39-.39-1.03-.39-1.42 0-.39.39-.39 1.02 0 1.41L6.17 11H3c-.55 0-1 .45-1 1s.45 1 1 1h3.17l-2.54 2.54c-.39.39-.39 1.02 0 1.41.39.39 1.03.39 1.42 0L9 13h2v2l-3.95 3.95c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0L11 17.83V21c0 .55.45 1 1 1s1-.45 1-1v-3.17l2.54 2.54c.39.39 1.02.39 1.41 0 .39-.39.39-1.03 0-1.42L13 15v-2h2l3.95 3.95c.39.39 1.03.39 1.42 0 .39-.39.39-1.02 0-1.41L17.83 13H21c.55 0 1-.45 1-1s-.45-1-1-1z" />
                        </svg>
                      </div>
                      <div>AC</div>
                    </div>
                    <div className="amenity-box">
                      <div
                        className={`amenity-icon-${productData.amenities[2]}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm-1 14H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z" />
                        </svg>
                      </div>
                      <div>Television</div>
                    </div>
                    <div className="amenity-box">
                      <div
                        className={`amenity-icon-${productData.amenities[3]}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M8.1 13.34l2.83-2.83-6.19-6.18c-.48-.48-1.31-.35-1.61.27-.71 1.49-.45 3.32.78 4.56l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27l-9.05 9.05c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 14.41l6.18 6.18c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 13l1.47-1.47z" />
                        </svg>
                      </div>
                      <div>Food</div>
                    </div>
                    <div className="amenity-box">
                      <div
                        className={`amenity-icon-${productData.amenities[4]}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          enable-background="new 0 0 24 24"
                          viewBox="0 0 24 24"
                        >
                          <g>
                            <rect fill="none" height="24" width="24" />
                            <rect fill="none" height="24" width="24" />
                          </g>
                          <g>
                            <g>
                              <g>
                                <path d="M11.1,12.08c-2-3.88-0.92-7.36,0.07-9.27c0.19-0.36-0.12-0.77-0.53-0.72C5.62,2.77,1.78,7.16,1.99,12.41 c0.01,0,0.01,0,0.01,0.01C2.62,12.15,3.29,12,4,12c1.66,0,3.18,0.83,4.1,2.15C9.77,14.63,11,16.17,11,18 c0,1.52-0.87,2.83-2.12,3.51c0.98,0.32,2.03,0.5,3.11,0.5c3.13,0,5.92-1.44,7.76-3.69c0.26-0.32,0.04-0.79-0.37-0.82 C16.89,17.37,13.1,15.97,11.1,12.08z" />
                              </g>
                              <path d="M7,16l-0.18,0C6.4,14.84,5.3,14,4,14c-1.66,0-3,1.34-3,3s1.34,3,3,3c0.62,0,2.49,0,3,0c1.1,0,2-0.9,2-2 C9,16.9,8.1,16,7,16z" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div>Balcony</div>
                    </div>
                  </div>
                </Paper>
              ) : (
                <Paper elevation={4} className="p-3 discription_box mt-3">
                  <div
                    class="row"
                    style={{
                      justifyContent: "space-evenly",
                      padding: "0 12px",
                    }}
                  >
                    <div className="amenity-box">
                      <div
                        className={`amenity-icon-${productData.amenities[2]}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          enable-background="new 0 0 24 24"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <g>
                            <rect fill="none" height="24" width="24" />
                          </g>
                          <g>
                            <g>
                              <g>
                                <path d="M11.23,6C9.57,6,8.01,6.66,6.87,7.73C6.54,6.73,5.61,6,4.5,6C3.12,6,2,7.12,2,8.5C2,9.88,3.12,11,4.5,11 c0.21,0,0.41-0.03,0.61-0.08c-0.05,0.25-0.09,0.51-0.1,0.78c-0.18,3.68,2.95,6.68,6.68,6.27c2.55-0.28,4.68-2.26,5.19-4.77 c0.15-0.71,0.15-1.4,0.06-2.06c-0.09-0.6,0.38-1.13,0.99-1.13H22V6H11.23z M4.5,9C4.22,9,4,8.78,4,8.5C4,8.22,4.22,8,4.5,8 S5,8.22,5,8.5C5,8.78,4.78,9,4.5,9z M11,15c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S12.66,15,11,15z" />
                              </g>
                              <g>
                                <circle cx="11" cy="12" r="2" />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div>Trainers</div>
                    </div>
                    <div className="amenity-box">
                      <div
                        className={`amenity-icon-${productData.amenities[1]}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M21 11h-3.17l2.54-2.54c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0L15 11h-2V9l3.95-3.95c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0L13 6.17V3c0-.55-.45-1-1-1s-1 .45-1 1v3.17L8.46 3.63c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.03 0 1.42L11 9v2H9L5.05 7.05c-.39-.39-1.03-.39-1.42 0-.39.39-.39 1.02 0 1.41L6.17 11H3c-.55 0-1 .45-1 1s.45 1 1 1h3.17l-2.54 2.54c-.39.39-.39 1.02 0 1.41.39.39 1.03.39 1.42 0L9 13h2v2l-3.95 3.95c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0L11 17.83V21c0 .55.45 1 1 1s1-.45 1-1v-3.17l2.54 2.54c.39.39 1.02.39 1.41 0 .39-.39.39-1.03 0-1.42L13 15v-2h2l3.95 3.95c.39.39 1.03.39 1.42 0 .39-.39.39-1.02 0-1.41L17.83 13H21c.55 0 1-.45 1-1s-.45-1-1-1z" />
                        </svg>
                      </div>
                      <div>AC</div>
                    </div>
                    <div className="amenity-box">
                      <div
                        className={`amenity-icon-${productData.amenities[0]}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M0 0h24v24H0V0zm0 0h24v24H0V0z"
                            fill="none"
                          />
                          <path d="M2.06 10.06c.51.51 1.32.56 1.87.1 4.67-3.84 11.45-3.84 16.13-.01.56.46 1.38.42 1.89-.09.59-.59.55-1.57-.1-2.1-5.71-4.67-13.97-4.67-19.69 0-.65.52-.7 1.5-.1 2.1zm7.76 7.76l1.47 1.47c.39.39 1.02.39 1.41 0l1.47-1.47c.47-.47.37-1.28-.23-1.59-1.22-.63-2.68-.63-3.91 0-.57.31-.68 1.12-.21 1.59zm-3.73-3.73c.49.49 1.26.54 1.83.13 2.44-1.73 5.72-1.73 8.16 0 .57.4 1.34.36 1.83-.13l.01-.01c.6-.6.56-1.62-.13-2.11-3.44-2.49-8.13-2.49-11.58 0-.69.5-.73 1.51-.12 2.12z" />
                        </svg>
                      </div>
                      <div>Wifi</div>
                    </div>
                    <div className="amenity-box">
                      <div
                        className={`amenity-icon-${productData.amenities[3]}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 172 172"
                        >
                          <g style={{ mixBlendMode: "normal" }}>
                            <path d="M0,172v-172h172v172z" fill="none"></path>
                            <g>
                              <path d="M13.76,13.76c-1.89888,0 -3.44,1.54112 -3.44,3.44v137.6c0,1.89888 1.54112,3.44 3.44,3.44h37.84c1.89888,0 3.44,-1.54112 3.44,-3.44v-137.6c0,-1.89888 -1.54112,-3.44 -3.44,-3.44zM65.36,13.76c-1.89888,0 -3.44,1.54112 -3.44,3.44v137.6c0,1.89888 1.54112,3.44 3.44,3.44h37.84c1.89888,0 3.44,-1.54112 3.44,-3.44v-137.6c0,-1.89888 -1.54112,-3.44 -3.44,-3.44zM116.96,13.76c-1.89888,0 -3.44,1.54112 -3.44,3.44v137.6c0,1.89888 1.54112,3.44 3.44,3.44h37.84c1.89888,0 3.44,-1.54112 3.44,-3.44v-137.6c0,-1.89888 -1.54112,-3.44 -3.44,-3.44zM24.08,30.96h17.2c1.89888,0 3.44,1.53768 3.44,3.44c0,1.90232 -1.54112,3.44 -3.44,3.44h-17.2c-1.89888,0 -3.44,-1.53768 -3.44,-3.44c0,-1.90232 1.54112,-3.44 3.44,-3.44zM75.68,30.96h17.2c1.89888,0 3.44,1.53768 3.44,3.44c0,1.90232 -1.54112,3.44 -3.44,3.44h-17.2c-1.89888,0 -3.44,-1.53768 -3.44,-3.44c0,-1.90232 1.54112,-3.44 3.44,-3.44zM127.28,30.96h17.2c1.89888,0 3.44,1.53768 3.44,3.44c0,1.90232 -1.54112,3.44 -3.44,3.44h-17.2c-1.89888,0 -3.44,-1.53768 -3.44,-3.44c0,-1.90232 1.54112,-3.44 3.44,-3.44zM24.08,41.28h17.2c1.89888,0 3.44,1.53768 3.44,3.44c0,1.90232 -1.54112,3.44 -3.44,3.44h-17.2c-1.89888,0 -3.44,-1.53768 -3.44,-3.44c0,-1.90232 1.54112,-3.44 3.44,-3.44zM75.68,41.28h17.2c1.89888,0 3.44,1.53768 3.44,3.44c0,1.90232 -1.54112,3.44 -3.44,3.44h-17.2c-1.89888,0 -3.44,-1.53768 -3.44,-3.44c0,-1.90232 1.54112,-3.44 3.44,-3.44zM127.28,41.28h17.2c1.89888,0 3.44,1.53768 3.44,3.44c0,1.90232 -1.54112,3.44 -3.44,3.44h-17.2c-1.89888,0 -3.44,-1.53768 -3.44,-3.44c0,-1.90232 1.54112,-3.44 3.44,-3.44zM41.28,75.68c1.89888,0 3.44,1.53768 3.44,3.44v13.76c0,1.90232 -1.54112,3.44 -3.44,3.44c-1.89888,0 -3.44,-1.53768 -3.44,-3.44v-13.76c0,-1.90232 1.54112,-3.44 3.44,-3.44zM92.88,75.68c1.89888,0 3.44,1.53768 3.44,3.44v13.76c0,1.90232 -1.54112,3.44 -3.44,3.44c-1.89888,0 -3.44,-1.53768 -3.44,-3.44v-13.76c0,-1.90232 1.54112,-3.44 3.44,-3.44zM144.48,75.68c1.89888,0 3.44,1.53768 3.44,3.44v13.76c0,1.90232 -1.54112,3.44 -3.44,3.44c-1.89888,0 -3.44,-1.53768 -3.44,-3.44v-13.76c0,-1.90232 1.54112,-3.44 3.44,-3.44zM24.08,127.28h17.2c1.89888,0 3.44,1.53768 3.44,3.44c0,1.90232 -1.54112,3.44 -3.44,3.44h-17.2c-1.89888,0 -3.44,-1.53768 -3.44,-3.44c0,-1.90232 1.54112,-3.44 3.44,-3.44zM75.68,127.28h17.2c1.89888,0 3.44,1.53768 3.44,3.44c0,1.90232 -1.54112,3.44 -3.44,3.44h-17.2c-1.89888,0 -3.44,-1.53768 -3.44,-3.44c0,-1.90232 1.54112,-3.44 3.44,-3.44zM127.28,127.28h17.2c1.89888,0 3.44,1.53768 3.44,3.44c0,1.90232 -1.54112,3.44 -3.44,3.44h-17.2c-1.89888,0 -3.44,-1.53768 -3.44,-3.44c0,-1.90232 1.54112,-3.44 3.44,-3.44zM24.08,137.6h17.2c1.89888,0 3.44,1.53768 3.44,3.44c0,1.90232 -1.54112,3.44 -3.44,3.44h-17.2c-1.89888,0 -3.44,-1.53768 -3.44,-3.44c0,-1.90232 1.54112,-3.44 3.44,-3.44zM75.68,137.6h17.2c1.89888,0 3.44,1.53768 3.44,3.44c0,1.90232 -1.54112,3.44 -3.44,3.44h-17.2c-1.89888,0 -3.44,-1.53768 -3.44,-3.44c0,-1.90232 1.54112,-3.44 3.44,-3.44zM127.28,137.6h17.2c1.89888,0 3.44,1.53768 3.44,3.44c0,1.90232 -1.54112,3.44 -3.44,3.44h-17.2c-1.89888,0 -3.44,-1.53768 -3.44,-3.44c0,-1.90232 1.54112,-3.44 3.44,-3.44z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div>Lockers</div>
                    </div>
                    <div className="amenity-box">
                      <div
                        className={`amenity-icon-${productData.amenities[4]}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 50 50"
                        >
                          <path d="M 11 0 C 6.421875 0 4 2.421875 4 7 L 4 28 L 5 28 C 5.765625 28 6.640625 27.554688 7.5625 27.09375 C 8.648438 26.550781 9.765625 26 11 26 C 12.234375 26 13.351563 26.550781 14.4375 27.09375 C 15.359375 27.554688 16.234375 28 17 28 C 17.765625 28 18.640625 27.554688 19.5625 27.09375 C 20.648438 26.550781 21.765625 26 23 26 C 24.234375 26 25.351563 26.550781 26.4375 27.09375 C 27.359375 27.554688 28.234375 28 29 28 C 29.765625 28 30.640625 27.554688 31.5625 27.09375 C 32.347656 26.699219 33.148438 26.316406 34 26.125 L 34 11 C 34 5.839844 37.101563 4 40 4 C 41.066406 4 42.613281 4.402344 43.875 5.53125 C 43.304688 2.132813 40.734375 0 37 0 Z M 40 6 C 39.210938 6 38.148438 6.1875 37.3125 7 L 42.53125 7 C 41.429688 6.023438 40.09375 6 40 6 Z M 1 8 C 0.449219 8 0 8.449219 0 9 C 0 9.550781 0.449219 10 1 10 L 3 10 L 3 8 Z M 36.59375 8 C 36.332031 8.523438 36.148438 9.183594 36.0625 10 L 49 10 C 49.554688 10 50 9.550781 50 9 C 50 8.449219 49.554688 8 49 8 Z M 36 11 L 36 41 C 36 41.554688 35.554688 42 35 42 L 10 42 L 10 49 C 10 49.554688 10.449219 50 11 50 L 43 50 C 43.554688 50 44 49.554688 44 49 L 44 11 Z M 11 28 C 10.234375 28 9.359375 28.445313 8.4375 28.90625 C 7.351563 29.449219 6.234375 30 5 30 L 4 30 L 4 34 L 5 34 C 5.765625 34 6.640625 33.554688 7.5625 33.09375 C 8.648438 32.550781 9.765625 32 11 32 C 12.234375 32 13.351563 32.550781 14.4375 33.09375 C 15.359375 33.554688 16.234375 34 17 34 C 17.765625 34 18.640625 33.554688 19.5625 33.09375 C 20.648438 32.550781 21.765625 32 23 32 C 24.234375 32 25.351563 32.550781 26.4375 33.09375 C 27.359375 33.554688 28.234375 34 29 34 C 29.765625 34 30.640625 33.554688 31.5625 33.09375 C 32.347656 32.699219 33.148438 32.316406 34 32.125 L 34 28.21875 C 33.507813 28.390625 32.976563 28.636719 32.4375 28.90625 C 31.351563 29.449219 30.234375 30 29 30 C 27.765625 30 26.648438 29.449219 25.5625 28.90625 C 24.640625 28.445313 23.765625 28 23 28 C 22.234375 28 21.359375 28.445313 20.4375 28.90625 C 19.351563 29.449219 18.234375 30 17 30 C 15.765625 30 14.648438 29.449219 13.5625 28.90625 C 12.640625 28.445313 11.765625 28 11 28 Z M 11 34 C 10.234375 34 9.359375 34.445313 8.4375 34.90625 C 7.351563 35.449219 6.234375 36 5 36 L 4 36 L 4 39 C 4 39.554688 4.449219 40 5 40 L 34 40 L 34 34.21875 C 33.507813 34.390625 32.976563 34.636719 32.4375 34.90625 C 31.351563 35.449219 30.234375 36 29 36 C 27.765625 36 26.648438 35.449219 25.5625 34.90625 C 24.640625 34.445313 23.765625 34 23 34 C 22.234375 34 21.359375 34.445313 20.4375 34.90625 C 19.351563 35.449219 18.234375 36 17 36 C 15.765625 36 14.648438 35.449219 13.5625 34.90625 C 12.640625 34.445313 11.765625 34 11 34 Z"></path>
                        </svg>
                      </div>
                      <div>Towel Service</div>
                    </div>
                  </div>
                </Paper>
              )}
            </div>
            <div
              className={
                productData.type === "Second Hand Product"
                  ? "d-none"
                  : "col-md-4"
              }
            >
              <div class="rateing_box">
                <Paper elevation={4} className="p-2">
                  <h4
                    class="box_title"
                    style={{ padding: "8px 0", textAlign: "center" }}
                  >
                    Ratings
                  </h4>
                  <div class="row align-items-center">
                    <div
                      class="col-12"
                      style={{ margin: "12px 0px", padding: "0px 24px" }}
                    >
                      <div class="single_bar">
                        <h6>
                          {category === "pg" ? "Space" : "Equipments"}{" "}
                          <span>{ratingData[0]}%</span>
                        </h6>
                        <div class="progress">
                          <div
                            class="progress-bar slideInLeft wow"
                            style={{ width: `${ratingData[0]}%` }}
                          ></div>
                        </div>
                      </div>
                      <div class="single_bar">
                        <h6>
                          {category === "pg" ? "Cleanliness" : "Staff"}
                          <span>{ratingData[1]}%</span>
                        </h6>
                        <div class="progress">
                          <div
                            class="progress-bar slideInLeft wow"
                            style={{ width: `${ratingData[1]}%` }}
                          ></div>
                        </div>
                      </div>
                      <div class="single_bar">
                        <h6>
                          {category === "pg" ? "Location" : "Activities"}
                          <span>{ratingData[2]}%</span>
                        </h6>
                        <div class="progress">
                          <div
                            class="progress-bar slideInLeft wow"
                            style={{ width: `${ratingData[2]}%` }}
                          ></div>
                        </div>
                      </div>
                      <div class="single_bar">
                        <h6>
                          {category === "pg" ? "Maintenance" : "Atmosphere"}
                          <span>{ratingData[3]}%</span>
                        </h6>
                        <div class="progress">
                          <div
                            class="progress-bar slideInLeft wow"
                            style={{ width: `${ratingData[3]}%` }}
                          ></div>
                        </div>
                      </div>
                      <div class="single_bar">
                        <h6>
                          {category === "pg" ? "Price" : "Ambience"}
                          <span>{ratingData[4]}%</span>
                        </h6>
                        <div class="progress">
                          <div
                            class="progress-bar slideInLeft wow"
                            style={{ width: `${ratingData[4]}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="riview_bg_box">
                        <div class="listghor_overlay desc"></div>
                        <div class="rateing_content">
                          <h5 style={{ fontWeight: "600" }}>Avarage Rating</h5>
                          <h3>{productData.avgRating}</h3>
                          <a
                            href="#customer_reviews"
                            style={{
                              textDecoration: "none",
                              color: "white",
                              fontWeight: "600",
                            }}
                          >
                            {`${productData.reviews.length}`} Reviews
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Paper>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12">
              <Paper
                elevation={4}
                className="map_box"
                style={{ padding: "30px" }}
              >
                <div className="contact_info">
                  <h4 className="desc-box-title">Location</h4>
                  <div style={{ fontWeight: "600", color: "rgba(0,0,0,0.7)" }}>
                    <h5 style={{ color: "rgba(0,0,0,0.7)" }}>
                      {productData.address}
                    </h5>
                    <p>{productData.district}</p>
                  </div>
                </div>
                <iframe
                  title="address"
                  src={`https://maps.google.com/maps?q=${productData.latitude}, ${productData.longitude}&z=15&output=embed`}
                ></iframe>
              </Paper>
            </div>
          </div>

          {productData.type === "Second Hand Product" ? null : (
            <div className="row justify-content-center">
              <div className="col-12 mt-3">
                <div id="customer_reviews" className="customer_reviews">
                  <Paper elevation={4}>
                    <div class="listing_details_box comment_area rateing_box">
                      <h4 className="desc-box-title">Reviews</h4>
                      <div class="single_comment">
                        <div class="comment_thumb">
                          <img src="/assets/images/comment_1.jpg" alt="" />
                        </div>
                        <div class="comment_info">
                          <h5>JHON DOE</h5>
                          <h6>Oct 15, 2018 at 11:00</h6>
                          <p>
                            My lady mush hanky panky young delinquent lurgy the
                            little rotter in my flat tomfoolery so I said mufty
                            cockup.!
                          </p>
                        </div>
                      </div>
                      <div class="single_comment">
                        <div class="comment_thumb">
                          <img src="/assets/images/comment_2.jpg" alt="" />
                        </div>
                        <div class="comment_info">
                          <h5>JHON DOE</h5>
                          <h6>Oct 15, 2018 at 11:00</h6>
                          <p>
                            My lady mush hanky panky young delinquent lurgy the
                            little rotter in my flat tomfoolery so I said mufty
                            cockup.!
                          </p>
                        </div>
                      </div>
                      <div class="single_comment">
                        <div class="comment_thumb">
                          <img src="/assets/images/comment_3.jpg" alt="" />
                        </div>
                        <div class="comment_info">
                          <h5>JHON DOE</h5>
                          <h6>Oct 15, 2018 at 11:00</h6>
                          <p>
                            My lady mush hanky panky young delinquent lurgy the
                            little rotter in my flat tomfoolery so I said mufty
                            cockup.!
                          </p>
                        </div>
                      </div>
                      <div class="single_comment">
                        <div class="comment_thumb">
                          <img src="/assets/images/comment_4.jpg" alt="" />
                        </div>
                        <div class="comment_info">
                          <h5>JHON DOE</h5>
                          <h6>Oct 15, 2018 at 11:00</h6>
                          <p>
                            My lady mush hanky panky young delinquent lurgy the
                            little rotter in my flat tomfoolery so I said mufty
                            cockup.!
                          </p>
                        </div>
                      </div>
                    </div>
                  </Paper>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  } else return <Spinnerloader />;
};

export default ProductDetails;
