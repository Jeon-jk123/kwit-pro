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
  room_name=localStorage.getItem("roomname");

  function send() {
      message=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:username,
          message:message,
          like:0
      });
      document.getElementById("msg").value="" ;
  }

  function logout2(){
       localStorage.removeItem("username");
       localStorage.removeItem("roomname");
       window.location="index.html";
  }
