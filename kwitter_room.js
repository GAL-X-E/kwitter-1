var firebaseConfig = {
      apiKey: "AIzaSyCs8FUUSvtk7js8x78oTtACnUTW89gMRvk",
      authDomain: "kwitter-d8f9a.firebaseapp.com",
      databaseURL: "https://kwitter-d8f9a-default-rtdb.firebaseio.com",
      projectId: "kwitter-d8f9a",
      storageBucket: "kwitter-d8f9a.appspot.com",
      messagingSenderId: "326212452605",
      appId: "1:326212452605:web:2e8ea8a54cf9432cb17e94",
      measurementId: "G-GRQ2KTX0GN"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

 function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
 }