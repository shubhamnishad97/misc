function check(){
var fullname=document.getElementById("fullname").value;
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
var confirmpassword=document.getElementById("confirmpassword").value;
var error=document.getElementById("errorField");

if(password!=confirmpassword){
	error.innerHTML="confirm password correctly";
	return false;
}
console.log(fullname);
console.log(email);
console.log(password);
console.log(confirmpassword);
}