document.addEventListener("DOMContentLoaded",() => {
  $(".header").load("header.sites");
  $(".footer").load("footer.sites");
  setTimeout(() => {
      changeSiteSpecificContent();
      signOut();
    }, 200);
});
