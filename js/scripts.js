
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


Desposit.prototype.finaldep = function(){
    return this.Despositadd + this.initialPayment;

}

withdrawal.prototype.subration = function(){
    return  finaldep - this.reduction;
}

$(document).ready(function(){
   $('#first').submit(function(){
    event.preventDefault();

    var inputName = document.getElementById("name").value;
    var inputInitial = document.getElementById("Initial").value;
     var account = new Customer (inputName,inputInitial);
    $()
   });
  


});
