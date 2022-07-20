async function changeSiteSpecificContent() {
  //Prints current location in blue
  let links = $(".header-links");
  let footerLinks = $(".Footer-Links");
  let currentSite = getSelectedPage();
  switch (currentSite) {
    case "product":
      links[0].style.color = "#00c8c8";
      changeHeaderContent("PRODUCT","VIEW","AVE CLASSIC SWEATSHIRT");
      $(".bannerBottom")[0].style.color = "#00c8c8";
      break;
    case "thebrand":
      links[1].style.color = "#00c8c8";
      footerLinks[0].style.color = "#00c8c8";
      changeHeaderContent("THE","BRAND","COMPANY SLOGAN GOES HERE");
      break;
    case "stores":
      links[2].style.color = "#00c8c8";
      footerLinks[1].style.color = "#00c8c8";
      changeHeaderContent("Local","Stores","FIND A STORE NEAR YOU");
      break;
    case "lookbook":
      links[3].style.color = "#00c8c8";
      changeHeaderContent("OUR","LOOKBOOK","LATEST POSTS - MENS & WOMENS");
      break;
    case "createBook":
      links[3].style.color = "#00c8c8";
      changeHeaderContent("WELCOME","TO AVE","CREATE YOUR OWN PERSONALIZED LOOK BOOK");
      break;
    case "login":
      $(".login-link")[0].style.color = "#00c8c8";
      changeHeaderContent("WELCOME","TO AVE","SIGN IN OR REGISTER");
      break;
    default:
  }
}

function changeHeaderContent(strong,normal,signiture) {
  $(".headerStrong")[0].innerHTML = strong;
  $(".headerTopNormal")[0].innerHTML = normal;
  $(".bannerBottom")[0].innerHTML = signiture;
}

function getSelectedPage() {
  return window.location.href.split("/")[window.location.href.split("/").length-1].split(".")[0];
}

function insertStandards() {
  $("BODY")[0].innerHTML += '<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>';
}

function signOut() {
  if(window.localStorage.getItem('user') != null) {
    $(".login-link")[0].innerHTML = "Sign Out";
    $(".login-link")[0].href = "home.sites";
    $(".login-link")[0].onclick = () => {
      window.localStorage.removeItem('user');
    }
  }
}
