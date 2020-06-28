import React, { createContext, Component } from "react";
import {
  getBuyData,
  getPgData,
  getGymData,
  getSponseredData,
} from "../utility/handlers";

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
    const fetchData = async () => {
      let buyInfo = [], pgInfo = [], gymInfo= [], sponseredInfo = [] 
      buyInfo = await getBuyData([]);
      pgInfo = await getPgData(
        [],
        [],
        []
      );
      gymInfo = await getGymData(
        [],
        pgInfo.premiumPgList,
        pgInfo.partnerPgList
      );
      sponseredInfo = await getSponseredData([]);

      let buyList = buyInfo.buyList;
      let pgList = pgInfo.pgList;
      let gymList = gymInfo.gymList;
      let sponseredList = sponseredInfo.sponseredList;
      let premiumList = gymInfo.premiumGymList;
      let partnerList = gymInfo.partnerGymList;

      return {
        buyList,
        pgList,
        gymList,
        sponseredList,
        premiumList,
        partnerList,
      };
    };

    fetchData().then((data) => {
      this.setState({
        pg: data.pgList,
        buy: data.buyList,
        gym: data.gymList,
        partner: data.partnerList,
        premium: data.premiumList,
        sponsered: data.sponseredList,
      });

      console.log(
        "pg :",
        data.pgList,
        "buy :",
        data.buyList,
        "gym :",
        data.gymList,
        "premium :",
        data.premiumList,
        "partner :",
        data.partnerList,
        "sponsered :",
        data.sponseredList
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
