function pasuser(form) {
if (form.id.value=="leetgrail") {
if (form.pass.value=="cybersecurity") {
location="./leetgrail krunker/loader/src/index.html"
} else {
alert("Invalid Password")
}
} else {  alert("Invalid UserID")
}
}
localStorage["id"] = form.id.value;
