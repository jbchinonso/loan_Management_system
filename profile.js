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
            container.innerHTML += 
            `<div class = "header">${element.amount}</div>
            <div class= "header">${element.duration}</div><div class = "header"> ${element.status}</div><br />`
         });
    }


    

})



$("#req-btn").on('click', function(e){
        e.preventDefault();

   // let $firstName = $("#firstName");
   // let $lastName = $("#lastName");
    var $amount = $("#amount");
    var $duration = $("#duration");
    

    const request = {
        "amount" : $amount.val(),
        "duration" : $duration.val(),
        "status": "pending",
        "customerId": `${user.customerId}`
    }

    $.ajax({
        type: "POST",
        url : "http://localhost:3000/requests",
        data: request,
        success: function(loanReq){
            alert("Your Request has been Sent")
        },
        error: function(){
            alert("Error trying to make a Request")
        }

    })


});


const pendingreqApi = "http://localhost:3000/Requests?status=pending";
let $transactionbox = $('.req-transactions')

$.ajax({
    type: "GET",
    url : pendingreqApi,
    success: function(Reqloan){
        Reqloan.forEach(element =>{
            $customerId = element.customerId;
            $.ajax({
                type: "GET",
                url : "http://localhost:3000/customers/"+ `${$customerId}`,
                success: function(customer){
                        $customer = customer['firstName'] + " " + customer['lastName']
            $transactionbox.append( `<div class = 'wrap'>
            <div class = 'cname'>${$customer} </div>
            <div class = 'content'>${element.amount}</div>
            <div class = 'content'>${element.duration}</div>
            <div class = 'content'><button data-id = ${element.id} id = "Approvebtn" class = "replybtn">Approve </button></div>
            <div class = 'content'><button data-id = ${element.id} id = 'Denybtn' class = "replybtn"> Deny </button></div>
            <div class = 'content'><button data-id = ${element.id} id = 'Deletebtn' class = "replybtn">Delete </button></div>
            
            </div> <br />`)

            
            

                    }
        })
    })
    },
    
})


$transactionbox .delegate('#Approvebtn','click', function (){
    console.log('yeah');
    var data = {
        "status": 'Approved'
    }
    $.ajax({
        type: "PATCH",
        url : "http://localhost:3000/requests/" + $(this).attr('data-id'),
        data: data,
        success: function(){
            alert('The Loan has been Approved')
        },
        error: function(){
            alert("Approval Failed")
        }
    })
})


})

