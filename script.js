function validateForm() {
  if (document.forms["login"]["email"].value == "") {
    alert("Email Tidak Boleh Kosong!");
    document.forms["login"]["email"].focus();
    return false;
  }

  if (document.forms["login"]["password"].value == "") {
    alert("Password Wajib Diisi!");
    document.forms["login"]["password"].focus();
    return false;
  }
}
