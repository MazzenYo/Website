document.addEventListener("DOMContentLoaded",() => {
  responsiveContent();
});

let currentStatus = 1;
function responsiveContent() {
  var widthWindow = window.innerWidth;
  let top = $(".left")[0];
  let bottom = $(".right")[0];
  if(widthWindow < 1170 && currentStatus != 0) {
    top.innerHTML = `
    <div class="img">
      <img src="../img/intro_brand.png" alt="Intro Image" class="introImg">
    </div>
    <h1>hand designed clothing</h1>
    <h2>established in 2013, avenue fashion Sed dictum elit vel sapien</h2>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
      sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
      ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
      sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
      et dolore magna aliquyam erat, sed diam voluptua.</p>
    <div class="img">
      <img src="../img/our_values.png" alt="Our Values" class="valuesImg">
    </div>
    <h1>Our Values, Visions and strategy</h1>
    <h2>the above image would be a great place for an advertising video</h2>
    <p>Nam liber tempor cum soluta nobis eleifend option congue nihil
      imperdiet doming id quod mazim placerat facer possim assum.
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
      nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
      volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
      ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
    `;
    bottom.innerHTML = `
      <div class="img">
        <img src="../img/ethical_trading.png" alt="Ethical Trading" class="ehticalImg">
      </div>
      <h1>ethical trading</h1>
      <h2>we oversee the working conditions of the people in the supply chain</h2>
      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit
        esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
        at vero eros et accumsan et iusto odio dignissim qui blandit praesent
        luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        Lorem ipsum dolor sit amet.</p>
    `;
    currentStatus = 0;
  } else if(widthWindow > 1170 && currentStatus != 1) {
    top.innerHTML = `
    <div class="img">
      <img src="../img/intro_brand.png" alt="Intro Image" class="introImg">
    </div>
    <div class="img">
      <img src="../img/our_values.png" alt="Our Values" class="valuesImg">
    </div>
    <h1>Our Values, Visions and strategy</h1>
    <h2>the above image would be a great place for an advertising video</h2>
    <p>Nam liber tempor cum soluta nobis eleifend option congue nihil
      imperdiet doming id quod mazim placerat facer possim assum.
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
      nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
      volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
      ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
    `;
    bottom.innerHTML = `
    <h1>hand designed clothing</h1>
    <h2>established in 2013, avenue fashion Sed dictum elit vel sapien</h2>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
      sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
      ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
      sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
      et dolore magna aliquyam erat, sed diam voluptua.</p>
      <div class="img">
        <img src="../img/ethical_trading.png" alt="Ethical Trading" class="ehticalImg">
      </div>
      <h1>ethical trading</h1>
      <h2>we oversee the working conditions of the people in the supply chain</h2>
      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit
        esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
        at vero eros et accumsan et iusto odio dignissim qui blandit praesent
        luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        Lorem ipsum dolor sit amet.</p>
    `;
    currentStatus = 1;
  }
  setTimeout(() => {
      responsiveContent();
    }, 1);
}
