
//ADD YOUR FIREBASE LINKS

const firebaseConfig = { 
  apiKey: "AIzaSyC67mITYy6yyCHCsg1yqRHaiOyuFxzkqUw",
authDomain: "kwitter-252f5.firebaseapp.com",
databaseURL: "https://kwitter-252f5-default-rtdb.firebaseio.com",
projectId: "kwitter-252f5",
storageBucket: "kwitter-252f5.appspot.com",
messagingSenderId: "810168827891",
appId: "1:810168827891:web:dbfecb2784454c45769c86",
measurementId: "G-0N7B9TL856"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {

  console.log("hello");
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "Arigit is my favourite singer"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
