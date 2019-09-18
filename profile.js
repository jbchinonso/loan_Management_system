let user = JSON.parse(window.localStorage.getItem('user'))
    if(!user){
        window.location.replace('index.html');
    }

const logout = () =>{
    window.localStorage.removeItem('user')
    window.location.replace('index.html');
}
const ApI ="http://localhost:3000/customers/"+ `${user.customerId}` + "/requests"

$(document).ready(function(){

document.querySelector(".customer-name").textContent = user.name;
let container = document.querySelector(".request-container")
  

$.ajax({
    type : "GET",
    url : ApI,
    dataType: "json",
    success: function(data){
         data.forEach(element => {
           console.log(container);
            console.log(element);
            container.innerHTML += 
            `<div class = "header">$${+element.amount}</div>
            <div class= "header">${element.duration}</div><div class = "header"> ${element.status}</div><br />`
         });
    }


    

})






})

