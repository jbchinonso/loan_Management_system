const customertApi = "http://localhost:3000/customers";

$(document).ready(function(){
    let user = JSON.parse(window.localStorage.getItem('user'))
    if(user){
        document.getElementById("loginbtn").style.display = "none";
        document.getElementById("signupbtn").style.display = "none";
        document.getElementById("logoutbtn").style.display = "inline";
        document.getElementById("dashboard").style.display = "inline";
    }
//Logout Funationality
     
 const btnLogout = document.getElementById("logoutbtn")
 btnLogout.addEventListener('click', (e) => {

    window.localStorage.removeItem('user')
    window.location.replace('index.html');

 })


//Login Funationality  
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


const dashboard  = document.getElementById("dashboard")
dashboard.style.color = "#000";
dashboard.addEventListener('click', (e) =>{
    if(user.admin){
        dashboard.href = "admin.html"
    }else{
        dashboard.href = "profile.html"
    }

})

const btn  = document.getElementById('applybtn')

btn.addEventListener('click',(e)=>{
    if(user && user.admin){
        btn.href = "admin.htnl"
    }else if(user){
        btn.href = "profile.html"
    }else{
        btn.href = "#steps"
    }
})

const package = document.querySelectorAll(".package")
package.forEach(element => {
 element.addEventListener('click',(e)=>{
    if(user && user.admin){
        location.href = "admin.htnl"
    }else if(user){
        location.href = "profile.html"
    }else{
        location.href = "#steps"
    }
})
 })

})


