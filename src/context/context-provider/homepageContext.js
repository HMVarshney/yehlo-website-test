import React, { createContext, Component } from "react";
import firebase from "../../api/fbConfig";

export const HomepageContext = createContext();

class HomepageContextProvider extends Component {
  state = {
    partner: [],
    sponsered: [],
    premium: [],
    pg: [],
    gym: [],
    buy: [],
  };

  componentDidMount() {
    const currentDate = firebase.firestore.Timestamp.fromDate(new Date());

    const compareRank = (a, b) => {
      return a.rank - b.rank;
    };

    let pgList = [],
      gymList = [],
      buyList = [],
      partnerList = [],
      premiumList = [],
      sponseredList = [];

    const fetchData = async () => {
      // fetching yeh!o buy data
      await firebase
        .firestore()
        .collection("SecondHandProducts")
        .orderBy("date", "asc")
        .limit(8)
        .get()
        .then((res) => {
          buyList = res.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
        });

      // fetching yeh!o pg data
      await firebase
        .firestore()
        .collection("PGs")
        .get()
        .then((res) => {
          pgList = res.docs
            .map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
            .filter((product) => {
              if (product.approved !== 1) {
                return false;
              }

              if (product.startDate > currentDate) {
                return false;
              }

              if (product.endDate !== "") {
                if (product.endDate >= currentDate) {
                  product.activePlan = true;
                  if (product.plan === "partner") {
                    partnerList.push(product);
                  } else if (product.plan === "premium") {
                    premiumList.push(product);
                  }
                } else {
                  product.activePlan = false;
                }
              }
              return true;
            });

          pgList.sort(compareRank);
          pgList = pgList.slice(0, 8);
        });

      //fetching yeh!o gym data
      await firebase
        .firestore()
        .collection("Gyms")
        .get()
        .then((res) => {
          gymList = res.docs
            .map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
            .filter((product) => {
              if (product.approved !== 1) {
                return false;
              }

              if (product.startDate > currentDate) {
                return false;
              }

              if (product.endDate !== "") {
                if (product.endDate >= currentDate) {
                  product.activePlan = true;
                  if (product.plan === "partner") {
                    partnerList.push(product);
                  } else if (product.plan === "premium") {
                    premiumList.push(product);
                  }
                } else {
                  product.activePlan = false;
                }
              }
              return true;
            });

          gymList.sort(compareRank);
          gymList = gymList.slice(0, 8);
        });

      // fetching yeh!o sponsered data
      await firebase
        .firestore()
        .collection("Ads")
        .get()
        .then((res) => {
          sponseredList = res.docs
            .map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
            .filter((product) => {
              if (product.approve !== 1) {
                return false;
              }

              if (
                product.startDate > currentDate ||
                product.endDate < currentDate
              ) {
                return false;
              }

              return true;
            });

          sponseredList.sort(compareRank);
          sponseredList = sponseredList.slice(0, 8);
        });
    };

    fetchData().then(() => {
      partnerList = partnerList.sort(compareRank);
      partnerList = partnerList.slice(0, 8);

      premiumList = premiumList.sort(compareRank);
      premiumList = premiumList.slice(0, 8);

      this.setState({
        pg: pgList,
        buy: buyList,
        gym: gymList,
        partner: partnerList,
        premium: premiumList,
        sponsered: sponseredList,
      });

      console.log(
        "pg :",
        pgList,
        "buy :",
        buyList,
        "gym :",
        gymList,
        "premium :",
        premiumList,
        "partner :",
        partnerList,
        "sponsered :",
        sponseredList
      );
    });
  }

  render() {
    return (
      <HomepageContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </HomepageContext.Provider>
    );
  }
}

export default HomepageContextProvider;
