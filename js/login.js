function login(){
  document.getElementById("Error").innerHTML = "";
  
  const mail = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(mail != null || password != null){
    document.getElementById("Error").innerHTML = "Idk how to do that yet <3";
  }
}