const logout = () =>{
    window.localStorage.removeItem('user')
    window.location.replace('index.html');
}
$(document).ready(function(){
const pendingreqApi = "http://localhost:3000/Requests";
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
            <div class = 'content'>${element.status}</div>
            <div class = 'content'><button data-id = ${element.id} id = 'Denybtn' class = "replybtn"> Deny </button></div>
            <div class = 'content'><button data-id = ${element.id} id = 'Deletebtn' class = "replybtn">Delete </button></div>
            
            </div> <br />`)

            
            

                    }
        })
    })
    },
    
})

})