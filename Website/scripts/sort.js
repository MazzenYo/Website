var products =
[
    {
      ref: "M1",
      link: "../images/sweatshirt_black.png",
      price: "150",
      date: "2020",
      description: `<h2>Peters classic Outfit </h2>
      <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam voluptua.</h3>
      <h4>Total cost Including shorts,shoes and<br>
        accessories is $150</h4>`
    },
    {
      ref: "W1",
      link: "../images/tshirt_white.png",
      price: "220",
      date: "2021",
      description: `<h2>Jessys Casual Outfit </h2>
      <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam voluptua.</h3>
      <h4>Total cost Including shorts,shoes and<br>
        accessories is $220</h4>`
    },
    {
      ref: "MJI",
      link: "../images/pullover_black.png",
      price: "200",
      date: "2020",
      description: `<h2>Jens Casual Outfit </h2>
      <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam voluptua.</h3>
      <h4>Total cost Including shorts,shoes and<br>
        accessories is $200</h4>`
    },
    {
      ref: "M2",
      link: "../images/sweatshirt_blue.png",
      price: "180",
      date: "2018",
      description: `<h2>Andreas Casual Outfit </h2>
      <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam voluptua.</h3>
      <h4>Total cost Including shorts,shoes and<br>
        accessories is $180</h4>`
    },
    {
      ref: "W2",
      link: "../images/tshirt_orange.png",
      price: "190",
      date: "2021",
      description: `<h2>Janines Summer dress </h2>
      <h3>My casual summer dress helps me feeling happy. I wear input
      whenever possible.</h3>
      <h4>Total cost Including shorts,shoes and<br>
        accessories is $190</h4>`
    },
    {
      ref: "W3",
      link: "../images/tshirt_green.png",
      price: "230",
      date: "2018",
      description: `<h2>Marias Casual Outfit </h2>
      <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam voluptua.</h3>
      <h4>Total cost Including shorts,shoes and<br>
        accessories is $230</h4>`
    },
    {
      ref: "W4",
      link: "../images/tshirt_black.png",
      price: "310",
      date: "2021",
      description: `<h2>Laras Casual Outfit </h2>
        <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam voluptua.</h3>
        <h4>Total cost Including shorts,shoes and<br>
          accessories is $310</h4>`
    }
]
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
        case "latest":
        if(products[i].date > products[j].date) {
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
  var diffs = $('.image-size');
  for (var i = 0; i < diffs.length; i++) {
    $('.reference')[i].innerHTML = `<sup>REF</sup>` + products[i].ref;
    $('.image-clothes')[i].src = products[i].link;
    $('.hide')[i].innerHTML = products[i].description;
  }
}
