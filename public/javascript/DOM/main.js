
async function changeSiteSpecificContent() {
    //Prints active site blue
    const links = $(".link");
    const footerLinks = $(".footer-link");
    const currentSite = getSelectedPage();
    switch (currentSite) {
        case "Product-view":
            links[0].style.color = "#00c8c8";
            changeHeaderContent("PRODUCT", "VIEW", "AVE CLASSIC SWEATSHIRT");
            $(".bannerBottom")[0].style.color = "#00c8c8";
            break;
        case "TheBrand":
            links[1].style.color = "#00c8c8";
            footerLinks[0].style.color = "#00c8c8";
            changeHeaderContent("THE", "BRAND", "COMPANY SLOGAN GOES HERE");
            break;
        case "LocalStores":
            links[2].style.color = "#00c8c8";
            footerLinks[1].style.color = "#00c8c8";
            changeHeaderContent("Local", "Stores", "FIND A STORE NEAR YOU");
            break;
        case "Lookbook":
            links[3].style.color = "#00c8c8";
            changeHeaderContent("OUR", "LOOKBOOK", "LATEST POSTS - MENS & WOMENS");
            break;
        case "CreateLookBook":
            links[3].style.color = "#00c8c8";
            changeHeaderContent("WELCOME", "TO AVE", "CREATE YOUR OWN PERSONALIZED LOOK BOOK");
            break;
        case "SignIn":
            $(".login")[0].style.color = "#00c8c8";
            changeHeaderContent("WELCOME", "TO AVE", "SIGN IN OR REGISTER");
            break;
        case "Registration":
            $(".login")[0].style.color = "#00c8c8";
            changeHeaderContent("WELCOME", "TO AVE", " REGISTER NOW");
            break;
        default:
    }
}

function changeHeaderContent(strong, normal, signiture) {
    $(".headerStrong")[0].innerHTML = strong;
    $(".headerTopNormal")[0].innerHTML = normal;
    $(".bannerBottom")[0].innerHTML = signiture;
}

function getSelectedPage() {
    return window.location.href.split("/")[window.location.href.split("/").length - 1].split(".")[0];
}

function insertStandards() {
    $("BODY")[0].innerHTML += '<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>';
}

function signOut() {
    if (sessionStorage.getItem('status') != null) {
        $(".login")[0].innerHTML = "Sign Out";
        $(".login")[0].href = "html/home.html";
        $(".login")[0].onclick = () => {
            sessionStorage.removeItem('status');
        }
    }
}
