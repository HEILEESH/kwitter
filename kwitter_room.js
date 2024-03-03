var firebaseConfig = {
      apiKey: "AIzaSyAr8a66MkYaMWiFyEcmnGio6oHfQM1T2xo",
      authDomain: "kwitter-8a48a.firebaseapp.com",
      databaseURL: "https://kwitter-8a48a-default-rtdb.firebaseio.com",
      projectId: "kwitter-8a48a",
      storageBucket: "kwitter-8a48a.appspot.com",
      messagingSenderId: "138800665437",
      appId: "1:138800665437:web:34ce3c02a1c3cf92210eb4"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML =
"Welcome " + user_name + "!";


user_name = localStorage.getItem("user_name");



function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

      
}








function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_name = childKey;
      //Start code
       console.log("Room Name -" + Room_name);
      
row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)' >#"+Room_name +"</div><hr>";

document.getElementById("output").innerHTML += row;

      //End code
      });
});

}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room", name);
      window.location = "kwitter_page.html";
}


function logout() {

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}







