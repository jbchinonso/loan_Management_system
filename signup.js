$(document).ready(function(){

    
    $('#signup-container').delegate('#loginbtn', 'click', function(e) {
        e.preventDefault();

    let firstName = (document.getElementById("firstName").value).trim();
    let lastName = (document.getElementById("lastName").value).trim();
    let email = (document.getElementById("email").value).trim();
    let password = (document.getElementById("password").value).trim();

if(firstName === "" || lastName === "" || email === "" || password === "")
{ alert("Please Fill all the fields")}else{
 

        $.ajax({
            type : "GET",
            url : "http://localhost:3000/customers",
            dataType: "json",
            success: function(data){
                var found = false
                data.forEach(element => { 
                    
                    if(element.email === email){
                        found = true;
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
                        url : "http://localhost:3000/customers",
                        data: person,
                        success: function(){
                           window.location.replace("index.html");
                        },
                        error: function(){
                            alert("Error trying to make sign up")
                        }
                    
                    })
                        
                    }

                    else {
                        alert("This User Already Exist in Our Record")
                    }
                
    
                } 
            }) 
    
    
}
    })


    })