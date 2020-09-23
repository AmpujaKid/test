function pasuser(form) {
if (form.id.value=="leetgraildev") {
if (form.pass.value=="krunker") {
location="./leetgrail krunker/loader/src/index.html"
} else {
alert("Invalid Password")
}
} else {  alert("Invalid UserID")
}
}
localStorage["id"] = form.id.value;
