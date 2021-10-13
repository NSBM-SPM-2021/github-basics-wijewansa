function validateForm() {
    let x = document.forms["cform"]["heading"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }