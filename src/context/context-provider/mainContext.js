import React, { createContext, Component } from "react";
import {
  getBuyData,
  getPgData,
  getGymData,
  getSponseredData,
} from "../utility/handlers";

export const MainContext = createContext();

class MainContextProvider extends Component {
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

      let buyList = buyInfo.buyList.slice(0, 8);
      let pgList = pgInfo.pgList.slice(0, 8);
      let gymList = gymInfo.gymList.slice(0, 8);
      let sponseredList = sponseredInfo.sponseredList.slice(0, 8);
      let premiumList = gymInfo.premiumGymList.slice(0, 8);
      let partnerList = gymInfo.partnerGymList.slice(0, 8);

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
      
    });
  }

  render() {
    return (
      <MainContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </MainContext.Provider>
    );
  }
}

export default MainContextProvider;
