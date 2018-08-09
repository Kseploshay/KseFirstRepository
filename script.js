function checkNameEmailValue(event){
  event.preventDefault(); 
  var name = document.getElementById("name");
  var nameValue = name.value;
  var form = document.getElementById("form")
   if (nameValue === ''){
    name.style.border = '1px solid red';

  } else {
    name.style.border = '1px solid black';
  }
   var email = document.getElementById("email");
   var emailValue = email.value;
   if (emailValue === ''){
    email.style.border = '1px solid red';
  } else {
    email.style.border = '1px solid black';
  }
  if ((nameValue != "") && (emailValue != "")){form.style.display = "none",alert ("спасибо, ваша заявка принята")};
 }

var button = document.getElementById("send");
button.addEventListener("click", checkNameEmailValue);

