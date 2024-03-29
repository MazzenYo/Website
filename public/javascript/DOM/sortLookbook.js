const products =
    [
        {
            ref: "M1",
            link: "../img/sweatshirt_black.png",
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
            link: "../img/tshirt_white.png",
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
            link: "../img/pullover_black.png",
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
            link: "../img/sweatshirt_blue.png",
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
            link: "../img/tshirt_orange.png",
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
            link: "../img/tshirt_green.png",
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
            link: "../img/grey_black.png",
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
    for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < products.length; j++) {
            switch (sortType) {
                case "ascPrice":
                    if (products[i].price < products[j].price) {
                        let tmp = products[i];
                        products[i] = products[j];
                        products[j] = tmp;
                    }
                    break;
                case "descPrice":
                    if (products[i].price > products[j].price) {
                        let tmp = products[j];
                        products[j] = products[i];
                        products[i] = tmp;
                    }
                    break;
                case "latest":
                    if (products[i].date > products[j].date) {
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

function replaceContent() {
    let diffs = $('.image-size');
    for (let i = 0; i < diffs.length; i++) {
        $('.reference')[i].innerHTML = `<sup>REF</sup>` + products[i].ref;
        $('.image-clothes')[i].src = products[i].link;
        $('.hidden')[i].innerHTML = products[i].description;
    }
}
