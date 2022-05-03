document.addEventListener("DOMContentLoaded",() => {
  $(".header").load("header.html");
  $(".footer").load("footer.html");
  setTimeout(() => {
      changeSiteSpecificContent();
      signOut();
    }, 200);
});
