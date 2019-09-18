const customertApi = "http://localhost:3000/customers";

//Login Funationality
const login = () =>{

$(document).ready(function(){
let email = (document.getElementById("email").value).trim();
let password = (document.getElementById("password").value).trim();
$.ajax({
    type : "GET",
    url : customertApi,
    dataType: "json",
    success: function(data){
        data.forEach(element => {
            
            if(element.email == email && element.password == password){
                const person ={
                    customerId : element.id, 
                    name : element.firstName + " " + element.lastName,
                    debt : element.loan
                }
                window.localStorage.setItem('user', JSON.stringify(person));
                window.location.replace("profile.html");
            }
                
            
        });
        window.alert("Wrong Email or password!")
        }
    })
  
})


}
