function pasuser(form) {
if (form.id.value=="leetgrail") {
if (form.pass.value=="cybersecurity") {
location="Page2.html"
} else {
alert("Invalid Password")
}
} else {  alert("Invalid UserID")
}
}
localStorage["id"] = form.id.value;
