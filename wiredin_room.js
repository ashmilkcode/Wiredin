const firebaseConfig = {
    apiKey: "AIzaSyAqf9_Wm8-WXW9-24XxMr-x2-eiYTtyMsU",
    authDomain: "kwitter-3d0be.firebaseapp.com",
    projectId: "kwitter-3d0be",
    storageBucket: "kwitter-3d0be.appspot.com",
    messagingSenderId: "87485751371",
    appId: "1:87485751371:web:d26e93254bae37d7b32dce"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
