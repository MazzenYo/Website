let lookbookStruct = {
    id: null,
    user: null,
    headline: null,
    price: null,
    desc: null,
    img: null,
    published: false
}

let lookbookCreate = true;
let imageLink = "";

function safeLookbook() {
    let lookbook = lookbookStruct;
    if (lookbookCreate)
        lookbook.id = getNewId();
    else
        lookbook.id = getIdOfUser();
    lookbook.user = window.localStorage.getItem("user");
    lookbook.headline = ($("#headline")[0].value);
    if (lookbook.headline == null || lookbook.headline === "") {
        $(".form-error-message")[0].innerHTML = "Bitte Eingabe Überprüfen!";
        $("input")[0].style.border = "1px solid red";
        return;
    } else {
        $(".form-error-message")[0].innerHTML = "";
        $("input")[0].style.border = "1px solid #e7e7e7";
    }
    lookbook.price = $("#price")[0].value;
    if (lookbook.price == null || lookbook.price === "" || isNaN(lookbook.price)) {
        $(".form-error-message")[1].innerHTML = "Bitte Eingabe Überprüfen!";
        $("input")[1].style.border = "1px solid red";
        return;
    } else {
        $(".form-error-message")[1].innerHTML = "";
        $("input")[1].style.border = "1px solid #e7e7e7";
    }
    lookbook.desc = $("#desc")[0].value;
    if (lookbook.desc == null || lookbook.desc === "") {
        $(".form-error-message")[2].innerHTML = "Bitte Eingabe Überprüfen!";
        $("input")[2].style.border = "1px solid red";
        return;
    } else {
        $(".form-error-message")[2].innerHTML = "";
        $("input")[2].style.border = "1px solid #e7e7e7";
    }
    lookbook.published = $("#agree")[0].checked;
    if (lookbookCreate)
        lookbook.img = $("#file-upload")[0].value;
    else {
        if ($("#file-upload")[0].value === "")
            lookbook.img = imageLink;
        else
            lookbook.img = $("#file-upload")[0].value;
    }
    if (lookbook.img == null || lookbook.img === "") {
        $(".form-error-message")[3].innerHTML = "Bitte Eingabe Überprüfen!";
        $("input")[3].style.border = "1px solid red";
        return;
    } else {
        $(".form-error-message")[3].innerHTML = "";
        $("input")[3].style.border = "1px solid #e7e7e7";
    }
    if (lookbookCreate)
        window.localStorage.removeItem("lookbook" + getIdOfUser() - 1);
    window.localStorage.setItem("lookbook" + getIdOfUser(), JSON.stringify(lookbook));
    setTimeout(function () {
        window.location.href = "lookbook.html";
    }, 3000);
    if (lookbookCreate)
        $("MAIN")[0].innerHTML = "<h1>Lookbook erfolgreich erstellt!</h1>";
    else
        $("MAIN")[0].innerHTML = "<h1>Lookbook erfolgreich überarbeitet!</h1>";
}

function getIdOfUser() {
    let currentUser = window.localStorage.getItem('user').split('"')[3];
    for (let i = 0; i < getNewId(); i++) {
        let lookbookies = window.localStorage.getItem('lookbook' + i).split(",");
        let user = (lookbookies[1] + lookbookies[2]).split('\"')[6].split('\\')[0];
        if (user === currentUser) {
            return i;
        }
    }
    return getNewId();
}

function getNewId() {
    let count = 0;
    while (true) {
        let lookbooklist = window.localStorage.getItem('lookbook' + count);
        if (lookbooklist === "null" || lookbooklist === "" || lookbooklist == null || lookbooklist === window.localStorage.getItem("THIS is a tag that will never exist."))
            return count;
        count++;
    }
}

function doesLookbooksExists() {
    let currentUser = window.localStorage.getItem('user').split('"')[3];
    for (let i = 0; i < getNewId(); i++) {
        let lookbookies = window.localStorage.getItem('lookbook' + i).split(",");
        let user = (lookbookies[1] + lookbookies[2]).split('\"')[6].split('\\')[0];
        if (user === currentUser) {
            lookbookCreate = false;
            let id = lookbookies[0].split(":")[1].split('"')[0];
            let headline = lookbookies[3].split(":")[1].split('"')[1];
            let price = lookbookies[4].split(":")[1].split('"')[1];
            let desc = lookbookies[5].split(":")[1].split('"')[1];
            let user = (lookbookies[1] + lookbookies[2]).split('\"')[6].split('\\')[0];
            $("#headline")[0].value = headline;
            $("#price")[0].value = price;
            $("#desc")[0].value = desc;
            if (lookbookies[7].split(":")[1].split("}")[0] === "true")
                $("#agree")[0].checked = true;
            else
                $("#agree")[0].checked = false;
            imageLink = lookbookies[6].split('"')[3];
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    doesLookbooksExists();
})