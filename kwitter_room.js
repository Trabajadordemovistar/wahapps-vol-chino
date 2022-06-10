
const firebaseConfig = {
      apiKey: "AIzaSyAdremEkPoANNH0m5H_gET5WUbEF3wZBF0",
      authDomain: "chino-f7348.firebaseapp.com",
      databaseURL: "https://chino-f7348-default-rtdb.firebaseio.com",
      projectId: "chino-f7348",
      storageBucket: "chino-f7348.appspot.com",
      messagingSenderId: "6465436488",
      appId: "1:6465436488:web:1596c9cdb9a97b4dad117d"
    };
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();
