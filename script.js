document.querySelectorAll(".navbar li").forEach(function (li) {
  li.addEventListener("keydown", function (event) {
    // Handle keyboard events
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // Prevent default action (e.g., navigating to URL)
      var link = li.querySelector("a"); // Get the <a> element within the <li>
      if (link) {
        window.location.href = link.getAttribute("href"); // Navigate to URL specified in href attribute
      }
    }
  });
});

let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document
  .querySelectorAll("article #main #gameplaytrailer p")
  .forEach(function (p) {
    p.addEventListener("keydown", function (event) {
      // Handle keyboard events
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        var link = p.querySelector("a");
        if (link) {
          link.setAttribute("target", "_blank");
          window.open(link.getAttribute("href"), "_blank");
        }
      }
    });
  });

document
  .querySelector(".navbar .indy")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      document.querySelector(".hamb").click();
    }
  });

document
  .querySelectorAll("article #main #gameplaytrailer div")
  .forEach(function (div) {
    div.addEventListener("keydown", function (event) {
    
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        var link = div.querySelector("a");
        if (link) {
          window.location.href = link.getAttribute("href");
        }
      }
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  var animatedImages = document.querySelectorAll(".animated-image");

  function fadeInOnScroll() {
    animatedImages.forEach(function (image) {
      if (isElementInViewport(image)) {
        image.classList.add("fadeInUp");
      }
    });
  }

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener("scroll", fadeInOnScroll);
});

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    var found = false;
    for (var j = 0; j < td.length; j++) {
      txtValue = td[j].textContent || td[j].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        found = true;
        break; 
      }
    }
    if (found) {
      for (var k = 0; k < td.length; k++) {
        txtValue = td[k].textContent || td[k].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          td[k].style.display = "";
        } else {
          td[k].style.display = "none";
        }
      }
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}

function toMyFunction() {
  var input, filter, divs, i;
  input = document.getElementById("Input");
  filter = input.value.toUpperCase();
  divs = document.getElementsByClassName("sameGame")[0].getElementsByTagName("div");
  for (i = 0; i < divs.length; i++) {
    var div = divs[i];
    if (div.innerHTML.toUpperCase().indexOf(filter) > -1) {
      div.style.display = "";
    } else {
      div.style.display = "none";
    }
  }
}

function printSelection() {
  var favCharacter = document.querySelector('input[name="fav_language"]:checked').value;
  var selectedServer = document.querySelector('select[name="server').value;

  document.getElementById("selectedCharacter").innerHTML = "Your favorite character is " + favCharacter + " and your server is " + selectedServer;
}

document.addEventListener("DOMContentLoaded", function () {
  var animatedImages = document.querySelectorAll(".sunset");

  function fadeInOnScroll() {
    animatedImages.forEach(function (image) {
      if (isElementInViewport(image)) {
        image.classList.add("fadeInO");
      }
    });
  }

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener("scroll", fadeInOnScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  var animatedImages = document.querySelectorAll("#section2 ul");

  function fadeInOnScroll() {
    animatedImages.forEach(function (image) {
      if (isElementInViewport(image)) {
        image.classList.add("fadeInU");
      }
    });
  }

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener("scroll", fadeInOnScroll);
});
