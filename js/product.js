var currentId = 0;
var currentProductId = window.localStorage.getItem('productGroup');

function firstChange() {
  if (currentProductId == null) {
    currentProductId = 0;
  }
  setTimeout(() => {
      changeImage();
    }, 25);
}

function leftButtonClicked() {
  currentId--;
  if(currentId==-1)
    currentId = products[currentProductId].length-1;
  changeImage();
}

function rightButtonClicked() {
  currentId++;
  if(currentId==products[currentProductId].length)
    currentId = 0;
  changeImage();
}

function changeImage() {
  var product = products[currentProductId][currentId];
  $("IMG")[1].src= product.link;
  $("IMG")[1].style.marginLeft = "2%";
  $("IMG")[1].style.width = "570px";
  $("IMG")[1].style.height = "710px";
  $(".fakeprice")[0].innerHTML = product.fakeprice;
  if(product.fakeprice == "")
    $("s")[0].parentNode.removeChild($("s")[0]);
  $(".newprice")[0].innerHTML = product.price;
  $(".available")[0].innerHTML = "<p><b>Availability:</b> " + product.availability+" <br><b>Product Code:</b> " + product.productCode + "</p>"
  $(".direct-description")[0].innerHTML = product.desc + " " + "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.";
}

var products =
[
  [
    {
      link: "../img/sweatshirt_black.png",
      desc: "Classic casual t-shirt for men on the move. Mens AVE Classic Sweatshirt.",
      price: "89.99",
      fakeprice: "",
      availability: "In stock",
      productCode: "#276577"
    },
  ],
  [
    {
      link: "../img/sweatshirt_blue.png",
      desc: "Mens sweatshirt blue. Mens sweatshirt blue. Mens sweatshirt blue ",
      price: "69.95",
      fakeprice: "",
      availability: "Out of stock",
      productCode: "#276578"
    }
  ],
  [
    {
      link: "../img/tshirt_white.png",
      desc: "Classic casual t-shirt for women on the move. Womens white shirt print.",
      price: "47,50",
      fakeprice: "",
      availability: "In stock",
      productCode: "#276577"
    },
  ],
  [
    {
      link: "../img/tshirt_orange.png",
      desc: "Classic casual t-shirt for women on the move. Womens burnt orange casual tee.",
      price: "29.95",
      fakeprice: "",
      availability: "Out of stock",
      productCode: "#276578"
    },
    {
      link: "../img/thumb-back.png",
      desc: "Classic casual t-shirt for women on the move. Womens burnt orange casual tee.",
      price: "29.95",
      fakeprice: "35",
      availability: "Out of stock",
      productCode: "#276578"
    },
    {
      link: "../img/thumb-front.png",
      desc: "Classic casual t-shirt for women on the move. Womens burnt orange casual tee.",
      price: "29.95",
      fakeprice: "35",
      availability: "Out of stock",
      productCode: "#276578"
    },
  ],
  [
    {
      link: "../img/tshirt_green.png",
      desc: "Classic casual t-shirt for women on the move. Womens green tshirt.",
      price: "34.79",
      fakeprice: "",
      availability: "Out of stock",
      productCode: "#276578"
    },
  ],
  [
    {
      link: "../img/grey_black.png",
      desc: "T-Shirt Black.",
      price: "72.99",
      fakeprice: "",
      availability: "Out of stock",
      productCode: "#276578"
    }
  ],
  [
    {
      link: "../img/pullover_black.png",
      desc: "Classic casual sweatshirt for men. Mens sweatshirt black.",
      price: "89.99",
      fakeprice: "107",
      availability: "Out of stock",
      productCode: "#539577"
    }
  ],
  [
    {
      link: "../img/classic_sweatshirt.png",
      desc: "Dies ist das klassische Sweatshirt.",
      price: "72.99",
      fakeprice: "",
      availability: "In stock",
      productCode: "#499577"
    },
  ],
  [
    {
      link: "../img/classic_sweatshirt_red.png",
      desc: "Dies ist das klassische Sweatshirt, aber in Rot ;P.",
      price: "69.99",
      fakeprice: "87",
      availability: "In stock",
      productCode: "#499578"
    }
  ],
];

document.addEventListener("DOMContentLoaded",() => {
  firstChange();
})

// Descrition Navigation
function navDescription() {
  var header = document.getElementById("nav");
  var btns = header.getElementsByClassName("btn");
  var des = document.getElementById("description");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    var text = document.getElementById("hide");
    if(des == document.getElementsByClassName("active")[0]) {
      text.style.display ="block";
    }
    else {
      text.style.display ="none";
    }
    });
  }
}

document.addEventListener("DOMContentLoaded",() => {
  navDescription();
})
