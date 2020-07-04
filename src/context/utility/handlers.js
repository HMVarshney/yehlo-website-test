import firebase from "../../api/fbConfig";
import { Data } from "@react-google-maps/api";

const currentDate = firebase.firestore.Timestamp.fromDate(new Date());
console.log(new Date(currentDate), currentDate.toDate());

const compareRank = (a, b) => {
  return a.rank - b.rank;
};

const getBuyData = (buyList) => {
  // fetching yeh!o buy data
  return firebase
    .firestore()
    .collection("SecondHandProducts")
    .orderBy("date", "asc")
    .get()
    .then((res) => {
      buyList = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data(), section:"buy"};
      });
      return { buyList };
    });
};

const getPgData = (pgList, premiumPgList, partnerPgList) => {
  // fetching yeh!o pg data
  return firebase
    .firestore()
    .collection("PGs")
    .orderBy('rank')
    .limit(4)
    .get()
    .then((res) => {
      pgList = res.docs
        .map((doc) => {
          return { id: doc.id, ...doc.data(), section:"pg" };
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
                partnerPgList.push(product);
              } else if (product.plan === "premium") {
                premiumPgList.push(product);
              }
            } else {
              product.activePlan = false;
            }
          }
          return true;
        });

      premiumPgList.sort(compareRank);
      partnerPgList.sort(compareRank);
      return { pgList, premiumPgList, partnerPgList };
    });
};

// const getMorePGData = (pgList, premiumPgList, partnerPgList) => {
//   let pgs = [];
//   return firebase
//     .firestore()
//     .collection("PGs")
//     .orderBy('rank')
//     .startAfter(pgList[pgList.length-1].rank)
//     .limit(4)
//     .get()
//     .then((res) => {
//       pgs = res.docs
//         .map((doc) => {
//           return { id: doc.id, ...doc.data(), section:"pg" };
//         })
//         .filter((product) => {
//           if (product.approved !== 1) {
//             return false;
//           }

//           if (product.startDate > currentDate) {
//             return false;
//           }

//           if (product.endDate !== "") {
//             if (product.endDate >= currentDate) {
//               product.activePlan = true;
//               if (product.plan === "partner") {
//                 partnerPgList.push(product);
//               } else if (product.plan === "premium") {
//                 premiumPgList.push(product);
//               }
//             } else {
//               product.activePlan = false;
//             }
//           }
//           return true;
//         });

//       pgList = [...pgList, ...pgs];
//       premiumPgList.sort(compareRank);
//       partnerPgList.sort(compareRank);;

//       return { pgList, premiumPgList, partnerPgList };
//     });
// };

const getGymData = (gymList, premiumGymList, partnerGymList) => {
  //fetching yeh!o gym data
  return firebase
    .firestore()
    .collection("Gyms")
    .get()
    .then((res) => {
      gymList = res.docs
        .map((doc) => {
          return { id: doc.id, ...doc.data(), section:"gym" };
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
                partnerGymList.push(product);
              } else if (product.plan === "premium") {
                premiumGymList.push(product);
              }
            } else {
              product.activePlan = false;
            }
          }
          return true;
        });

      gymList.sort(compareRank);
      premiumGymList.sort(compareRank);
      partnerGymList.sort(compareRank);

      return { gymList, premiumGymList, partnerGymList };
    });
};

const getSponseredData = (sponseredList) => {
  // fetching yeh!o sponsered data
  return firebase
    .firestore()
    .collection("Ads")
    .get()
    .then((res) => {
      sponseredList = res.docs
        .map((doc) => {
          return { id: doc.id, ...doc.data(), section:"ad"};
        })
        .filter((product) => {
          if (product.approved !== 1) {
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
      return { sponseredList };
    });
};

export { compareRank, getBuyData, getPgData, getGymData, getSponseredData };
