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
 console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function addRoom()
{
 room_name = document.getElementById("room_name").value;

 firebase.database().ref("/").child(room_name).update({
   purpose : "adding room name"
 });

   localStorage.setItem("room_name", room_name);

   window.location = "wiredin_page.html";
}

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
   window.location = "wiredin_page.html";
}
