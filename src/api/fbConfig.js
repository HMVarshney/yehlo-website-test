import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD8D57A53wX9t_sW0SJUH9PrljnqeomLQg",
    authDomain: "yehlo-74093.firebaseapp.com",
    databaseURL: "https://yehlo-74093.firebaseio.com",
    projectId: "yehlo-74093",
    storageBucket: "yehlo-74093.appspot.com",
    messagingSenderId: "468747257680",
    appId: "1:468747257680:web:d89fe36147507d3c07ce55",
    measurementId: "G-5W0YPHY1NS"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;