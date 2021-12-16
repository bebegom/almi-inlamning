function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  // function showSearchInput() {
  //   document.getElementById("searchInput").style.display = "block";
  // }


document.querySelector('#searchArea').addEventListener('click', e => {
  if ( e.target === document.getElementById("searchInput") || document.getElementById("searchSpan") ) {
    document.getElementById("searchInput").style.display = "block";
  } else {

  }
})


  /*
function scaleUp() {
  let a = document.getElementById("h1");
  let b = document.getElementById("h2");
  let c = document.getElementById("h3");

  a.style.fontSize = "32px";
  b.style.fontSize = "24px";
  c.style.fontSize = "20px";

}

function scaleDown() {
  let a = document.getElementById("h1");
  let b = document.getElementById("h2");
  let c = document.getElementById("h3");

  a.style.fontSize = "30px";
  b.style.fontSize = "22px";
  c.style.fontSize = "18px";
}
*/