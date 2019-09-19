$(document).ready(function(){

    
    $('#signup-container').delegate('#loginbtn', 'click', function() {

    const SignupApi = "http://localhost:3000/customers";
    const customertApi = "http://localhost:3000/customers";

    let email = (document.getElementById("email").value).trim();
        var found = false
        console.log(email);
        $.ajax({
            type : "GET",
            url : customertApi,
            dataType: "json",
            success: function(data){
                data.forEach(element => { 
                    if(console.log(email)){
                        found = true;
                        console.log(email);
                    }})
    
                } 
            })
    
    if(!found){
        var person = {
            "firstName": $('#firstName').val(),
            "lastName": $('#lastName').val(),
            "email": $('#email').val(),
            "password": $('#password').val(),
            "loan": 0
        }
    
        
    $.ajax({
        type: "POST",
        url : SignupApi,
        data: person,
        success: function(){
            window.location(index.html)
        },
        error: function(){
            alert("Error trying to make sign up")
        }
    
    })
                   
    }else{
        alert("This User Already Exist in Our Record")
    }
    
    
    
    
    
    })
    })