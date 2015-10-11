
$('#signup-form').on('submit', function(event) {
    
    var pass1 = $("input[name=password]").val();
    var pass2 = $("input[name=password2]").val();
    
    if (pass1 != pass2) {
        alert("Passwords don't match!");
    }
    else if (pass1.length < 10) {
        alert("Password is too short!");
    } 
    else {
        return;
    }
    
    event.preventDefault();
});