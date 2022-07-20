function login() {
  const person = {
    email: document.getElementsByTagName("INPUT")[0].value,
    password : document.getElementsByTagName("INPUT")[1].value
  }
  if(checkForValidEmail(person.email)) {
    $("INPUT")[0].style.border = "1px solid #e7e7e7";
    $("INPUT")[1].style.border = "1px solid #e7e7e7";
    if(checkIfAccountIsAvailable(person)=="true") {
      window.localStorage.setItem('user', JSON.stringify(person));
    } else if(checkIfAccountIsAvailable(person) == "wrongPassword") {
      $("INPUT")[1].style.border = "1px solid red";
      $(".errorMessage")[0].innerHTML = "Bitte gültiges Passwort eingeben!";
    } else if(checkIfAccountIsAvailable(person) == "wrongEmail") {
      $("INPUT")[0].style.border = "1px solid red";
      $(".errorMessage")[0].innerHTML = "Bitte eine existierende Email eingeben!";
    }
  } else {
    $(".errorMessage")[0].innerHTML = "Die eingegebene Email scheint keinen gültigen Muster zu folgen. Bitte überprüfen Sie diese!";
  }
}
function checkIfAccountIsAvailable(person) {
  const validAccounts = [
    {
      email: "test@test.de",
      password : "test"
    }
  ]
  let emailFound = "wrongEmail";
  for(let i=0; i<validAccounts.length; i++) {
    if(validAccounts[i].email == person.email && validAccounts[i].password == person.password) {
      return "true";
    }
      if(validAccounts[i].email == person.email) {
        emailFound = "wrongPassword";
      }

  }
  return emailFound;
}
function checkForValidEmail() {
    let emailToCheck = $("INPUT")[0].value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let result = re.test(emailToCheck.toLowerCase());
    if(result || emailToCheck == "") {
      $("INPUT")[0].style.border = "1px solid #e7e7e7";
      $("BUTTON")[0].disabled = false;
    } else {
        $("INPUT")[0].style.border = "1px solid red";
        $("BUTTON")[0].disabled = true;
    }
    return(re.test(emailToCheck.toLowerCase()));
}

function checkIfLogedIn() {
  if(window.localStorage.getItem('user') != null) {
    document.location.href = "createBook.sites";
  }
}

document.addEventListener("DOMContentLoaded",() => {
  setInterval(() => { checkIfLogedIn(); }, 10);
})
