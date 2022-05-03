function changePage(page) {
  var page1 = $("#page1")[0];
  var page2 = $("#page2")[0];
  var paginations = $("a");
  var startOfFirstA = getFirstPagePosition(paginations);
  var startOfLastA = getLastPagePosition(paginations,"2");
  if (page == 1) {
    page1.style.display = "block";
  } else {
    page1.style.display = "none";
  }
  if(page == 2) {
    page2.style.display = "block";
  } else {
    page2.style.display = "none";
  }
  for(var i = 0; i < startOfLastA-startOfFirstA; i++) {
    if(i!=page -1)
        paginations[startOfFirstA + i].classList.remove('active');
    else
      paginations[startOfFirstA + i].classList.add('active');
  }
}

function getFirstPagePosition(aList) {
  for(var i = 0; i < aList.length; i++)
    if(aList[i].innerHTML == "1")
      return i;
  return 0;
}

function getLastPagePosition(aList, last) {
  for(var i = 0; i < aList.length; i++)
    if(aList[i].innerHTML == last)
      return i+1;
  return 0;
}

document.addEventListener("DOMContentLoaded",() => {
  setTimeout(() => {
      changePage(1);
    }, 250);
})
