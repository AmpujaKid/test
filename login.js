function pasuser(form) {
  if (form.id.value=="bean") {
      if (form.pass.value=="leetgrail") {
        location="./tools"
      }
    }

    else if(form.id.value=="ampuja") {
        if(form.pass.value=="leetgrail") {
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
