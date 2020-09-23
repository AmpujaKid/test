function pasuser(form) {
  if (form.id.value=="leetgrail") {
      if (form.pass.value=="krunker") {
        location="./tools"
      }
    }

    else if(form.id.value=="leetgraildev") {
        if(form.pass.value=="krunker") {
          location="./devtools"
        }
        else {
          alert("Invalid Password")
        }
      }
      else {
      alert("Invalid UserID")
      }
  }
localStorage["id"] = form.id.value;
