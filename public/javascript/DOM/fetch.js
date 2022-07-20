const products =
    [
        {
            link: "../img/sweatshirt_black.png",
            desc: `<h1>Mens AVE Classic Sweatshirt <sup>£</sup>89.99</h1>
    <h2> Classic casual t-shirt for men on the move.<br>
        100% cotton.</h2>`,
            price: "89.99",
            fakeprice: null,
            productGroupid: 0,
            category: "men"
        },
        {
            link: "../img/tshirt_white.png",
            desc: `<h1>Womens white shirt print <sup>£</sup>47.50</h1>
    <h2>Classic casual t-shirt for women on the move. <br>
        100% cotton.</h2>`,
            price: "47.50",
            fakeprice: null,
            id: 1,
            productGroupid: 2,
            category: "women"
        },
        {
            link: "../img/pullover_black.png",
            desc: `<h1>Mens sweatshirt black <sup>£</sup>89.99</h1>
    <h2>Classic casual sweatshirt for men. <br>
        100% cotton.</h2>`,
            price: "89.99",
            fakeprice: "107",
            id: 2,
            productGroupid: 6,
            category: "men"
        },
        {
            link: "../img/sweatshirt_blue.png",
            desc: `<h1>Mens sweatshirt blue <sup>£</sup>69.95</h1>
    <h2>Classic casual sweatshirt for men. <br>
        100% cotton.</h2>`,
            price: "69.95",
            fakeprice: null,
            id: 3,
            productGroupid: 1,
            category: "men"
        },
        {
            link: "../img/tshirt_orange.png",
            desc: `<h1>Womens burnt orange casual tee <sup>£</sup>29.95</h1>
    <h2>Classic casual t-shirt for women on the move. <br>
        100% cotton.</h2>`,
            price: "29.95",
            fakeprice: null,
            id: 4,
            productGroupid: 3,
            category: "women"
        },
        {
            link: "../img/tshirt_green.png",
            desc: `<h1>Womens green tshirt <sup>£</sup>29.95</h1>
    <h2>Classic casual t-shirt for women on the move. <br>
        100% cotton.</h2>`,
            price: "34.79",
            fakeprice: null,
            id: 5,
            productGroupid: 4,
            category: "women"
        },
        {
            link: "../img/classic_sweatshirt.png",
            desc: `<h1>Classic Sweatshirt <sup>£</sup>72.99</h1>
   <h2>Classic sweatshirt. <br>
       100% cotton.</h2>`,
            price: "72.99",
            id: 6,
            productGroupid: 7,
            category: "men"
        },
        {
            link: "../img/grey_black.png",
            desc: `<h1>T-Shirt Black <sup>£</sup>72.99</h1>
   <h2>T-Shirt black. <br>
       100% cotton.</h>`,
            price: "72.99",
            id: 7,
            productGroupid: 5,
            category: "men"
        }
    ];

function sort(sortType) {
    for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < products.length; j++) {
            switch (sortType) {
                case "lowToHigh":
                    if (products[i].price < products[j].price) {
                        let tmp = products[i];
                        products[i] = products[j];
                        products[j] = tmp;
                    }
                    break;
                case "HighToLow":
                    if (products[i].price > products[j].price) {
                        let tmp = products[j];
                        products[j] = products[i];
                        products[i] = tmp;
                    }
                    break;
                default:
            }
        }
    }
    replaceContent();
}

function categories(type) {
    const images = $(".image-clothes");
    $("#big-image");
    $("#small-image");
    for (let i = 0; i < images.length; i++) {
        if (products[i].category === type) {
            images[i].src = products[i].link;
            if ((i + 1) / 3 === 1 || (i + 1) / 4 === 1) {
                images[i].style.width = "528px";
                images[i].style.height = "703px";
                images[i].style.marginLeft = "175px";
            } else {
                images[i].style.width = "420px";
                images[i].style.height = "500px";
                images[i].style.margin = "0 0 0 0px";
            }
        }
        /*else{
            images[i].src = products[i].link;
            if((i + 1) / 3 === 1 || (i + 1) / 4 === 1) {
                images[i].style.width = "528px";
                images[i].style.height = "703px";
                images[i].style.marginLeft = "175px";
            } else {
                images[i].style.width = "420px";
                images[i].style.height = "500px";
                images[i].style.margin = "0 0 0 0px";
            }*/
    }
    for (let i = 0; i < images.length; i++) {
        if (products[i].fakeprice != null) {
            $('b')[i].innerHTML = `<s><sup>£</sup>` + products[i].fakeprice + `</s> <sup>£</sup>` + products[i].price;
        } else {
            $('b')[i].innerHTML = `<sup>£</sup>` + products[i].price;
        }
        $('.image-clothes')[i].src = products[i].link;
        $('.hidden')[i].innerHTML = '<a onclick="sendToProductView(' + products[i].productGroupid + "," + products[i].productSelector + ');"><i class="fa fa-info-circle"></i></a>' + products[i].desc;
    }
}

function replaceContent() {
    const images = $(".image-clothes");
    $("#big-image");
    $("#small-image");
    for (let i = 0; i < images.length; i++) {
        images[i].src = products[i].link;
        if ((i + 1) / 3 === 1 || (i + 1) / 4 === 1) {
            images[i].style.width = "528px";
            images[i].style.height = "703px";
            images[i].style.marginLeft = "175px";
        } else {
            images[i].style.width = "420px";
            images[i].style.height = "500px";
            images[i].style.margin = "0 0 0 0px";
        }
    }
    for (let i = 0; i < images.length; i++) {
        if (products[i].fakeprice != null) {
            $('b')[i].innerHTML = `<s><sup>£</sup>` + products[i].fakeprice + `</s> <sup>£</sup>` + products[i].price;
        } else {
            $('b')[i].innerHTML = `<sup>£</sup>` + products[i].price;
        }
        $('.image-clothes')[i].src = products[i].link;
        $('.hidden')[i].innerHTML = '<a onclick="sendToProductView(' + products[i].productGroupid + "," + products[i].productSelector + ');"><i class="fa fa-info-circle"></i></a>' + products[i].desc;
    }
}

function sendToProductView(idToSendTo, selector) {
    window.localStorage.setItem('productGroup', idToSendTo);
    window.localStorage.setItem('productSelector', selector);
    window.location.href = "../html/Product-view.html";
}

document.addEventListener("DOMContentLoaded", () => {
    replaceContent();
})