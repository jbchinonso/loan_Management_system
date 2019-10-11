$(document).ready(function(){
const myform = document.querySelector('.modal-content');
myform.addEventListener('submit',(e)=>{
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
                        data: JSON.stringify(person),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success:  window.location.href = "index.html?msg=You have successfully signed up please Login",
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