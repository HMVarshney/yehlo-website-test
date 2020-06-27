import React, { Component } from "react";
import "../css/getTheApp.css";

class GetTheApp extends Component {
  render() {
    return (
      <div className="getTheApp container">
        <section className="HomeAppDownloadNew__root--2Z_rf CityDesktop__appDownloadRoot--3HYwU" style={{width:"auto"}}>
          <div className="HomeAppDownloadNew__infoWrapper--38WE7">
            <div className="AppDownloadSmsEmail__root--1jsVv">
              <h2 className="AppDownloadSmsEmail__heading--3KWbi">
                Get Yeh!o on your phone
              </h2>
              <p className="AppDownloadSmsEmail__text--2HbWu">
                Enter your mobile number to receive the app download link
              </p>
              <div className="AppDownloadSmsEmail__inpDiv--1N0Uc">
                <span className="AppDownloadSmsEmail__countryCode--1dgRE">
                  <img
                    src="/assets/images/indianFlag.jpg"
                    alt="Country Flag"
                    className="AppDownloadSmsEmail__countryFlag--F7DyQ"
                  />
                  <span>+91</span>
                </span>
                <input
                  className="AppDownloadSmsEmail__inputEl--3QHvH AppDownloadSmsEmail__inpSms--23iHf"
                  maxLength={50}
                  placeholder="Enter Mobile number"
                />
                <button className="AppDownloadSmsEmail__appLinkCTA--FFDEP normal">
                  Send
                </button>
              </div>
              <button className="AppDownloadSmsEmail__appLinkCTA--FFDEP xsScreen">
                  Send
                </button>
            </div>
            <div className="HomeAppDownloadNew__appDownloadWrapper--1QMc8">
              <a
                href="/getApp"
                className="HomeAppDownloadNew__appDownloadButton--35BY5"
              >
                <div className="LazyLoadImage__imageContainer--3EOU_ HomeAppDownloadNew__imgButton--2cxd8 HomeAppDownloadNew__imgWrapper--3paON">
                  <div className="TemplateShimmer__shimmer--1HNwN TemplateShimmer__shimmerWrapper--Py2CJ TemplateShimmer__hidden--1oL9u" />
                  <img
                    className="HomeAppDownloadNew__imgButton--2cxd8"
                    src="/assets/images/playStore.png"
                    alt="Play Store"
                    itemScope
                    itemProp="image"
                  />
                </div>
              </a>
              <a
                href="/getApp"
                className="HomeAppDownloadNew__appDownloadButton--35BY5 mr-0"
              >
                <div className="LazyLoadImage__imageContainer--3EOU_ HomeAppDownloadNew__imgButton--2cxd8 HomeAppDownloadNew__imgWrapper--3paON">
                  <div className="TemplateShimmer__shimmer--1HNwN TemplateShimmer__shimmerWrapper--Py2CJ TemplateShimmer__hidden--1oL9u" />
                  <img
                    className="HomeAppDownloadNew__imgButton--2cxd8"
                    src="/assets/images/AppleStoreBadge.svg"
                    alt="App Store"
                    itemScope
                    itemProp="image"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="HomeAppDownloadNew__imgDiv--1rvhH">
            <div className="LazyLoadImage__imageContainer--3EOU_ HomeAppDownloadNew__imageWrapper--1PYzK">
              <div className="TemplateShimmer__shimmer--1HNwN TemplateShimmer__shimmerWrapper--Py2CJ TemplateShimmer__hidden--1oL9u" />
              <img
                className
                src="https://res.cloudinary.com/urbanclap/image/upload/q_70,f_auto,fl_progressive:steep/categories/category_v2/category_b6f0ae60.png"
                alt=""
                itemScope
                itemProp="image"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default GetTheApp;
