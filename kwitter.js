var firebaseConfig = {
  apiKey: "AIzaSyD5uqgpo7gGO9HMTiPg_C06ij-QqEVMLOs",
  authDomain: "kwitter-project-d8019.firebaseapp.com",
  databaseURL: "https://kwitter-project-d8019-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-d8019",
  storageBucket: "kwitter-project-d8019.appspot.com",
  messagingSenderId: "673449841873",
  appId: "1:673449841873:web:84c0aeb5a45c9430c4e1f0"
};

firebase. initializeApp(firebaseConfig);

username=localStorage.getItem("uname");
  document.getElementById("name").innerHTML = username;

  function add_room() {
      roomname=document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({ purpose : "adding room name" });
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html";
  }

  function getData() { 
      firebase.database().ref("/").on('value', function(snapshot) 
      { document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function(childSnapshot) 
      { childKey = childSnapshot.key; 
        Room_names = childKey;
     console.log("Room Name - " + Room_names);
     row="<div id="+Room_names+"onclick='Redirect_to_room_name()'>#"+Room_Names+"</div><hr>";
     document.getElementById("output").innerHTML=row;
      });
    });
};



  function logout() {
      window.location="index.html";
  }