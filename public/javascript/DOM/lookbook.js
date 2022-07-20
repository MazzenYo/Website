function sendToOwnLockbookIfSignedUp() {
    if (window.localStorage.getItem('user') != null) {
        window.location.href = "../html/CreateLookBook.html";
    } else {
        window.location.href = "../html/SignIn.html";
    }
}

async function getUserLookbooks() {
    $("#page1")[0].innerHTML = "<div class=\"first\">";
    let janes_lookbook = `<div class="jane-lookbook">
    <h1><b>Jane's </b>Lookbook</h1>
    <h2>get the look for under £200!</h2>
    <p> We invited actress Jane Marshall to join us <br>
      for the day and choose her perfect outfit from <br>
      our vast range of womens fashion.<br><br>
      This is of course not true as this is just a design
      for a website and this is simply filler text.
     </p>
     <button type="button" name="ownbook" onclick="sendToOwnLockbookIfSignedUp();">Own book</button>
    <img src="../../img/JanesLookbook.png" alt="Janes Lookbook" class="janes_lookbook">
  </div>`;
    let win_lookbook = `<div class="win-lookbook">
    <h1><b>Win</b> a new look!</h1>
    <h2>add looks or items to your lookbook for a chance of winning </h2>
    <p>See an item or a complete look you like, click the  button to add it to your <br>
      lookbook and you’ll be automatically entered to our monthly draw where <br>
      one winner gets abbr <b>£300</b> gift voucher to spend on our website! <br><br>
      Terms: No purchase necessary. Vouchers are non-transferable and no <br>
      cash alternative is ofered. Competition is for members only.</p>
      <button type="button" name="ownBook" onclick="sendToOwnLockbookIfSignedUp();" >Own Book</button>
      <h3>Win</h3>
      <h4>a new look</h4>
    <img src="../../img/win_lookbook.png" alt="Win Lookbook" class="win_lookbook">
  </div>`;
    let i = 0;
    let icount = 0;
    while (i < getNewId() + normalLookbooks.length) {
        let ref;
        let headline;
        let price;
        let desc;
        let img;
        let char;
        let writeLookbook = true;
        if (icount < getNewId()) {
            let lookbooklist = window.localStorage.getItem('lookbook' + i);
            if (lookbooklist === "null" || lookbooklist === "" || lookbooklist == null || lookbooklist === window.localStorage.getItem("THIS is a tag that will never exist."))
                break;
            let lookbookies = lookbooklist.split(",");
            if (lookbookies[7].split(":")[1].split("}")[0] === "true") {
                ref = lookbookies[0].split(":")[1].split('"')[0] + 1;
                headline = lookbookies[3].split(":")[1].split('"')[1];
                price = lookbookies[4].split(":")[1].split('"')[1];
                desc = lookbookies[5].split(":")[1].split('"')[1];
                img = lookbookies[6].split('\\');
                img = img[img.length - 1].split("\"")[0];
                char = "Y";
            } else
                writeLookbook = false;
        } else {
            ref = normalLookbooks[i - (getNewId())].ref;
            headline = normalLookbooks[i - (getNewId())].lookbookName;
            price = normalLookbooks[i - (getNewId())].price;
            desc = normalLookbooks[i - (getNewId())].lookbookDesc;
            img = normalLookbooks[i - (getNewId())].img;
            char = normalLookbooks[i - (getNewId())].char;
        }
        const space = `<div class="image-size">
                    <b class="reference"><sup>REF</sup>${char}${ref}</b>
                    <div class="image-background-filler">
                      <${img} src="../img/img" class="image-clothes">
                    </div>
                    <div class="hide">
                      <a href="#"><i class="fa fa-info-circle"></i></a>
                      <a href="#"><i class="fa fa-gratipay"></i></a>
                        <h2>${headline}</h2>
                        <h3>${desc}</h3>
                        <h4>Total cost Including shorts,shoes and<br>
                          accessories is $${price}</h4>
                    </div>
                  </div>`;
        let objectToInject;
        if (icount === 0)
            objectToInject = $(".first")[0];
        if (icount === 2) {
            objectToInject.innerHTML += janes_lookbook;
            $("#page1")[0].innerHTML += "</div><div class=\"second\">";
            objectToInject = $(".second")[0];
        }
        if (icount === 6) {
            $("#page1")[0].innerHTML += "</div><div class=\"third\">";
            objectToInject = $(".third")[0];
            objectToInject.innerHTML += win_lookbook;
        }
        if (icount === 7) {
            $("#page1")[0].innerHTML += "</div>";
            objectToInject = $("#page2")[0];
        }
        let count = 0;
        if (icount > 7) {
            count = icount - 8;
            const rest = count % 4;
            if (count === 0)
                $("#page2")[0].innerHTML += "<div class=\"first\">";
            else if (rest === 0)
                $("#page2")[0].innerHTML += "</div><div class=\"first\">";
        }
        if (writeLookbook)
            objectToInject.innerHTML += space;
        else
            icount--;
        i++;
        icount++;
    }
    $("#page2")[0].innerHTML += "</div>";

}

function getNewId() {
    let count = 0;
    while (true) {
        let lookbooklist = window.localStorage.getItem('lookbook' + count);
        if (lookbooklist === "null" || lookbooklist === "" || lookbooklist == null || lookbooklist == window.localStorage.getItem("THIS is a tag that will never exist."))
            return count;
        count++;
    }
}

const normalLookbooks = [
    {
        lookbookName: "PETERS CLASSIC OUTFIT",
        lookbookDesc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam voluptua.",
        price: "150",
        img: "sweatshirt_black.png",
        char: "M",
        ref: "1"
    },
    {
        lookbookName: "JESSYS CASUAL OUTFIT",
        lookbookDesc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam voluptua.",
        price: "220",
        img: "tshirt_white.png",
        char: "W",
        ref: "1"
    },
    {
        lookbookName: "JENS CASUAL OUTFIT",
        lookbookDesc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam voluptua.",
        price: "200",
        img: "pullover_black.png",
        char: "MJ",
        ref: "1"
    },
    {
        lookbookName: "Andreas CASUAL OUTFIT",
        lookbookDesc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam voluptua.",
        price: "180",
        img: "sweatshirt_blue.png",
        char: "M",
        ref: "2"
    },
    {
        lookbookName: "JANINES SUMMER DRESS",
        lookbookDesc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam voluptua.",
        price: "190",
        img: "tshirt_orange.png",
        char: "W",
        ref: "2"
    },
    {
        lookbookName: "MARIAS CASUAL OUTFIT",
        lookbookDesc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam voluptua.",
        price: "230",
        img: "tshirt_green.png",
        char: "W",
        ref: "3"
    },
    {
        lookbookName: "LARAS CASUAL OUTFIT",
        lookbookDesc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam voluptua.",
        price: "310",
        img: "grey_black.png",
        char: "W",
        ref: "4"
    }
]

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(function () {
        getUserLookbooks()
    }, 500);
})
