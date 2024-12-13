
$(document).ready(function () {



    
    $("#userForm").on("submit", function (event) {
        event.preventDefault();

        const passwordd = $('#password').val()
        const confirmPasswordd =$('#confirmPassword').val()

        let isValid = true;
        // Validate username
        // if ($("#username").val().trim() === "") {
        //     $("#usernameError").text("Please put in your username").show();
        //     isValid = false;
        // } else {
        //     $("#usernameError").hide();
        // }

        if ($("#username").val().trim() === "") {
            $("#usernameError").text("Please put in your username").show();
            isValid = false;
        } else {
            $("#usernameError").hide();
        }
      


        

       

       
        if ($("#email").val().trim() === "") {
            $("#emailError").text("Please put in your email").show();
            isValid = false;
        } else {
            $("#emailError").hide();
        }

      
        const password = $("#password").val().trim();
        const confirmPassword = $("#confirmPassword").val().trim();
        

        if (password !== confirmPassword) {
            $("#passwordError").text("Put in the correct password").show();
            isValid = false;
        } else {
            $("#passwordError").hide();
        }

        
        if (isValid) {
            alert("Form submitted successfully!");
            window.location.href = './home.html'

        }
    });
});
