// NAVIGATION 

function openNav() {
  // Adăugați o clasă CSS la elementul principal pentru a opri scroll-ul pe fundal
  document.body.classList.add("stop-scrolling");

  // Setează înălțimea meniului la 100%
  document.getElementById("myNav").style.width = "80%";
}

function closeNav() {
  // Închideți meniul prin setarea înălțimii acestuia la 0%
  document.getElementById("myNav").style.width = "0%";

  // Elimină clasa CSS pentru a permite din nou scroll-ul pe fundal
  document.body.classList.remove("stop-scrolling");

  // Verificați dacă este specificată și o funcție pentru a rula după închiderea meniului
  if (typeof afterCloseNav === "function") {
    afterCloseNav();
  }
}

// Funcția pentru a rula după închiderea meniului (adăugați logica specifică aici)
function afterCloseNav() {
  // Adăugați aici logica specifică după închiderea meniului
}





var prevScrollpos = window.pageYOffset;
var navbar = document.getElementById("navbar");

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  
  if (currentScrollPos === 0) {
    // Scroll-ul este la top, afișează navbar-ul
    navbar.style.top = "90px";
  } else if (prevScrollpos > currentScrollPos) {
  } else {
    // Scroll în jos, ascunde navbar-ul
    navbar.style.top = "-100px";
  }
  
  prevScrollpos = currentScrollPos;
};

// CHANGE BG ON HOVER 

// Adaugă evenimente de hover pentru fiecare clasă specifică
   document.querySelector('.scenery').addEventListener('mouseover', function () {
    console.log('Hover pe scenery');
    document.getElementById('main-section').style.backgroundImage = "url('Images/image1.jpg')";
});

document.querySelector('.experiences').addEventListener('mouseover', function () {
    console.log('Hover pe experiences');
    document.getElementById('main-section').style.backgroundImage = "url('Images/image2.jpg')";
});

document.querySelector('.spaces').addEventListener('mouseover', function () {
    console.log('Hover pe spaces');
    document.getElementById('main-section').style.backgroundImage = "url('Images/image-new2.webp')";
});


// UNDERLINE TEXT ON HOVER 

// Obține o listă cu toate elementele <span>
var spans = document.querySelectorAll("span");

// Adaugă un eveniment de clic pentru fiecare element <span>
spans.forEach(function(span) {
  span.addEventListener("mouseover", function() {
    // Elimină clasa "active" de pe toate elementele <span>
    spans.forEach(function(s) {
      s.classList.remove("active");
    });

    // Adaugă clasa "active" pe elementul <span> curent
    this.classList.add("active");
  });
});


// PARALLAX SCROLL IMAGE 

var images = document.querySelectorAll('.parallax-img');
var windowHeight = window.innerHeight;

window.addEventListener('scroll', function() {
    var windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (windowScrollTop === 0) {
        TweenLite.to(images, 1.2, {
            yPercent: 0,
            ease: Power1.easeOut,
            overwrite: 0
        });
    } else {
        images.forEach(function(image) {
            var elementOffsetTop = image.offsetTop,
                elementHeight = image.offsetHeight,
                velocity = parseInt(image.getAttribute('data-velocity'));

            if (windowScrollTop + windowHeight > elementOffsetTop && windowScrollTop < elementOffsetTop + elementHeight) {
                // If in view:
                TweenLite.to(image, 1.2, {
                    yPercent: (windowScrollTop + windowHeight - elementOffsetTop) / windowHeight * velocity,
                    ease: Power1.easeOut,
                    overwrite: 0
                });
            }
        });
    }
});


// REVIEWS SECTION 

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    },
    1400:{
      items:4
    }
  }
})

// ACTIVITY SECTION 

var tooltips = document.querySelectorAll('.tooltip span');

window.onmousemove = function (e) {
    var x = (e.clientX + 0) + 'px',
        y = (e.clientY + -200) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
};
