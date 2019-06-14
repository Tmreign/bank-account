
///business logic///


function Customer(name,initial){
  this.wholeName = name;
  this.initialPayment =initial;

}

function  Desposit(add){
   this.additional = add;

}

function  withdrawal(minus){
    this.reduction = minus;
 
 }

Customer.prototype.details = function() {
    return this.wholeName + " " + this.initialPayment;
  }

Desposit.prototype.finaldep = function(){
    return this.Despositadd + this.initialPayment;

}

withdrawal.prototype.subration = function(){
    return  finaldep - this.reduction;
}

$(document).ready(function(){
   $('#first').submit(function(){
    event.preventDefault();

    var inputtedWholeName = $(this).find("name").val();
    var inputtedInitialPayment = $(this).find("Initial").val();
    var newCustomer = Customer (inputtedWholeName,inputtedInitialPayment);
    $("ul#contacts").append("<li><span class='contact'>" + newCustomer.details() + "</span></li>");
   });
  


});
