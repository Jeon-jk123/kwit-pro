function login() {
    username=document.getElementById("user_name").value;
   localStorage.setItem("uname",username);
   window.location="kwitter.html";
}