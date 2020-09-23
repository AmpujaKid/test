function pasuser(form) {
if (form.id.value=="leetgraildev") {
if (form.pass.value=="krunker") {
location="Home Page.html"
} else {
alert("Invalid Password")
}
} else {  alert("Invalid UserID")
}
}
localStorage["id"] = form.id.value;
