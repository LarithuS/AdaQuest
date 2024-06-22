var form = document.getElementById("loginform");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);

function login() {
  document.getElementById("Error").innerHTML = "";

  const mail = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (mail !== null && password !== "") {
      document.getElementById("Error").innerHTML = "Idk how to do that yet <3";
  } else {
      document.getElementById("Error").innerHTML = "Please enter both email and password.";
  }
}
