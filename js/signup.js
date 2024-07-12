document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("signupform");
    
    function handleForm(event) { 
        event.preventDefault(); 
    } 

    form.addEventListener('submit', handleForm);

    function login() {
        document.getElementById("Error").innerHTML = "";

        const mail = document.getElementById("email").value;
        const mail2 = document.getElementById("r-email").value;
        const password = document.getElementById("password").value;
        const password2 = document.getElementById("r-password").value;
        const user = document.getElementById("user").value;
        if(user==""||password==""||password2==""||mail==""||mail2==""){
            document.getElementById("Error").innerHTML = "Please enter the required information.";
        }else if (mail !== mail2) {
            document.getElementById("Error").innerHTML = "Email inputs dont match";
        }else if( password!== password2){
            document.getElementById("Error").innerHTML = "Password inputs dont match";
        }
         else {
            document.getElementById("Error").innerHTML = "";
        }
    }

    document.getElementById("signup").addEventListener("click", login);
});