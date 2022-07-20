var products =
[
  {
    link: "../img/sweatshirt_black.png",
    desc: `<h2>Mens AVE Classic Sweatshirt <sup>£</sup>89.99</h2>
    <h3> Classic casual t-shirt for men on the move.<br>
        100% cotton.</h3>`,
    price: "89.99",
    fakeprice: null,
    productGroupid: 0,
  },
  {
    link: "../img/tshirt_white.png",
    desc: `<h2>Womens white shirt print <sup>£</sup>47.50</h2>
    <h3>Classic casual t-shirt for women on the move. <br>
        100% cotton.</h3>`,
    price: "47.50",
    fakeprice: null,
    id: 1,
    productGroupid: 2,
  },
  {
    link: "../img/pullover_black.png",
    desc: `<h2>Mens sweatshirt black <sup>£</sup>89.99</h2>
    <h3>Classic casual sweatshirt for men. <br>
        100% cotton.</h3>`,
    price: "89.99",
    fakeprice: "107",
    id: 2,
    productGroupid: 6,
  },
  {
    link: "../img/sweatshirt_blue.png",
    desc: `<h2>Mens sweatshirt blue <sup>£</sup>69.95</h2>
    <h3>Classic casual sweatshirt for men. <br>
        100% cotton.</h3>`,
    price: "69.95",
    fakeprice: null,
    id: 3,
    productGroupid: 1,
  },
  {
    link: "../img/tshirt_orange.png",
    desc: `<h2>Womens burnt orange casual tee <sup>£</sup>29.95</h2>
    <h3>Classic casual t-shirt for women on the move. <br>
        100% cotton.</h3>`,
    price: "29.95",
    fakeprice: null,
    id: 4,
    productGroupid: 3,
  },
  {
    link: "../img/tshirt_green.png",
    desc: `<h2>Womens green tshirt <sup>£</sup>29.95</h2>
    <h3>Classic casual t-shirt for women on the move. <br>
        100% cotton.</h3>`,
    price: "34.79",
    fakeprice: null,
    id: 5,
    productGroupid: 4,
  },
  {
   link: "../img/classic_sweatshirt.png",
   desc: `<h2>Classic Sweatshirt <sup>£</sup>72.99</h2>
   <h3>Classic sweatshirt. <br>
       100% cotton.</h3>`,
   price: "72.99",
   id: 6,
   productGroupid: 7,
  },
  {
   link: "../img/grey_black.png",
   desc: `<h2>T-Shirt Black <sup>£</sup>72.99</h2>
   <h3>T-Shirt black. <br>
       100% cotton.</h3>`,
   price: "72.99",
   id: 7,
   productGroupid: 5,
  }
];

function sort(sortType) {
  for (var i = 0; i < products.length; i++) {
    for (var j = 0; j < products.length; j++) {
      switch (sortType) {
        case "ascPrice":
          if(products[i].price < products[j].price) {
            var tmp = products[i];
            products[i] = products[j];
            products[j] = tmp;
          }
          break;
        case "descPrice":
        if(products[i].price > products[j].price) {
          var tmp = products[j];
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

function replaceContent() {
  var images = $("IMG");
  var image_bigs = $("#image-big");
  var image_mini = $("#image-mini");
    for(var i = 0; i < images.length; i++) {
      images[i].src = products[i].link;
      if((i + 1) / 3 == 1 || (i + 1) / 4 == 1) {
        images[i].style.width = "528px";
        images[i].style.height = "703px";
        images[i].style.marginLeft = "175px";
      } else {
        images[i].style.width = "420px";
        images[i].style.height = "500px";
        images[i].style.margin = "0 0 0 0px";
      }
    }
  for (var i = 0; i < images.length; i++) {
    if(products[i].fakeprice != null){
      $('b')[i].innerHTML = `<s><sup>£</sup>`+products[i].fakeprice+`</s> <sup>£</sup>` + products[i].price;
    }
    else {
      $('b')[i].innerHTML = `<sup>£</sup>` + products[i].price;
    }
    $('.image-clothes')[i].src = products[i].link;
    $('.hidden')[i].innerHTML = '<a onclick="sendToProductView(' + products[i].productGroupid + "," + products[i].productSelector +');"><i class="fa fa-info-circle"></i></a>' +products[i].desc;
  }
}

function sendToProductView(idToSendTo, selector) {
  window.localStorage.setItem('productGroup',idToSendTo);
  window.localStorage.setItem('productSelector', selector);
  window.location.href = "product.sites";
}

document.addEventListener("DOMContentLoaded",() => {
  replaceContent();
})
