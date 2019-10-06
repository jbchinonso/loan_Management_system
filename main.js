const customertApi = "http://localhost:3000/customers";

//Login Funationality

$(document).ready(function(){
const myForm = document.querySelector('.modal-content') 

myForm.addEventListener('submit', (e) =>{

    e.preventDefault();

let email = (document.getElementById("email").value).trim();
let password = (document.getElementById("password").value).trim();
$.ajax({
    type : "GET",
    url : customertApi,
    dataType: "json",
    success: function(data){
        var found = false;
        data.forEach(element => {
            
            if(element.email == email && element.password == password){
                found = true;
                if(element.admin){
                    const person = {
                    customerId : element.id, 
                    name : element.firstName + " " + element.lastName,
                    admin : element.admin
                    }
                    window.localStorage.setItem('user', JSON.stringify(person));
                    window.location.replace("admin.html");
                }else{
                    const person ={
                    customerId : element.id, 
                    name : element.firstName + " " + element.lastName,
                    debt : element.loan
                }

                window.localStorage.setItem('user', JSON.stringify(person));
                window.location.replace("profile.html");
            }
                
            }
               
             
        });
        
        if(!found) alert("Wrong Email or password!")
        },
    
    
       
    })
  
})


})


