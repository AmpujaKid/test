function pasuser(form) {
if (form.id.value=="leetgraildev") {
if (form.pass.value=="krunker") {
location="Login.html"
} else {
alert("Invalid Password")
}
} else {  alert("Invalid UserID")
}
}
localStorage["id"] = form.id.value;
