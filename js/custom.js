// © Copyright Miķelis Putnieks 2020

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function(){               // script animaciju trigger scroll sensors
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {             // script animaciju trigger
      // parastajam slide
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide_in");
        }
    });
      // no kreisas
    $(".slideanim-left").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide-in-left");
        }
    });
      // no labas
    $(".slideanim-right").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide-in-right");
      }
    });
  });
})

// sākas mans kods (iepriekš tikai animācijas un sroll top button)

function show() {
    document.getElementById("toportfolio").classList.add("slide_away");
    window.setTimeout(clearStart, 2400);
}

function clearStart(){
    while (document.getElementById("centre_start").hasChildNodes()) {
        document.getElementById("centre_start").removeChild(document.getElementById("centre_start").firstChild);
    }
    
    //window.setTimeout(createPortfolio1, 50);
    window.setTimeout(createPortfolio2, 50);
    window.setTimeout(createPortfolio3, 50);
}

function createPortfolio1() {
    let r = document.createElement("DIV");
    r.classList.add("card");
    r.classList.add("slide_in");
    
    let r1 = document.createElement("IMG");
    r1.setAttribute("src", "img/card.png");
    r1.classList.add("card-img-top");
    r.appendChild(r1);

    let r2 = document.createElement("DIV");
    r2.classList.add("card-body");
    
    let r3 = document.createElement("H4");
    r3.innerHTML = "mputnieks.pythonanywhere.com";
    r2.appendChild(r3);
    
    let r4 = document.createElement("P");
    r4.innerHTML = "Kāds apraksts par projektu";
    r2.appendChild(r4);
    
    let r5 = document.createElement("BUTTON");
    r5.setAttribute("type", "button");
    r5.setAttribute("data-toggle", "modal");
    r5.setAttribute("data-target", "#centralModalWarning");
    r5.innerHTML = "Aplūkot projektu";
    r5.classList.add("btn");
    r5.classList.add("btn-success");
    r2.appendChild(r5);
    
    r.appendChild(r2);
    
    document.getElementById("centre_start").appendChild(r);
}

function createPortfolio2() {
    let r = document.createElement("DIV");
    r.classList.add("card");
    r.classList.add("slide_in");
    
    let r1 = document.createElement("IMG");
    r1.setAttribute("src", "img/href-1.png");
    r1.classList.add("card-img-top");
    r.appendChild(r1);

    let r2 = document.createElement("DIV");
    r2.classList.add("card-body");
    
    let r3 = document.createElement("H4");
    r3.classList.add("badge-inline");
    r3.innerHTML = "palodze.lv";
    r2.appendChild(r3);
    
    let r4 = document.createElement("SPAN");
    r4.classList.add("badge");
    r4.classList.add("badge-pill");
    r4.classList.add("badge-success");
    r4.innerHTML = "pabeigts";
    r2.appendChild(r4);
    
    let r5 = document.createElement("P");
    r5.innerHTML = "Februāris 2020";
    r2.appendChild(r5);
    
    let r6 = document.createElement("BUTTON");
    r6.setAttribute("type", "button");
    r6.setAttribute("data-toggle", "modal");
    r6.setAttribute("data-target", "#modal2");
    r6.innerHTML = "Aplūkot projektu";
    r6.classList.add("btn");
    r6.classList.add("btn-success");
    r2.appendChild(r6);
    
    r.appendChild(r2);
    
    document.getElementById("centre_start").appendChild(r);
}

function createPortfolio3() {
    let r = document.createElement("DIV");
    r.classList.add("card");
    r.classList.add("slide_in");
    
    let r1 = document.createElement("IMG");
    r1.setAttribute("src", "img/href-2.png");
    r1.classList.add("card-img-top");
    r.appendChild(r1);

    let r2 = document.createElement("DIV");
    r2.classList.add("card-body");
    
    let r3 = document.createElement("H4");
    r3.classList.add("badge-inline");
    r3.innerHTML = "mikelisp.lv";
    r2.appendChild(r3);
    
    let r4 = document.createElement("SPAN");
    r4.classList.add("badge");
    r4.classList.add("badge-pill");
    r4.classList.add("badge-warning");
    r4.innerHTML = "progresā";
    r2.appendChild(r4);
    
    let r5 = document.createElement("P");
    r5.innerHTML = "Maijs 2020";
    r2.appendChild(r5);
    
    let r6 = document.createElement("BUTTON");
    r6.setAttribute("type", "button");
    r6.setAttribute("data-toggle", "modal");
    r6.setAttribute("data-target", "#modal3");
    r6.innerHTML = "Aplūkot projektu";
    r6.classList.add("btn");
    r6.classList.add("btn-success");
    r2.appendChild(r6);
    
    r.appendChild(r2);
    
    document.getElementById("centre_start").appendChild(r);
}

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

/* 
<div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

<!-- Accordion card -->
<div class="card">
  <!-- Card header -->
  <div class="card-header" role="tab" id="headingOne1">
    <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
      aria-controls="collapseOne1">
      <h5 class="mb-0"> Animācijas </h5>
    </a>
  </div>
  <!-- Card body -->
  <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
    data-parent="#accordionEx">
    <div class="card-body">
      bla bla bla.... teksts
    </div>
  </div>
</div>

<!-- Accordion card -->
<div class="card">
  <!-- Card header -->
  <div class="card-header" role="tab" id="headingTwo2">
    <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
      aria-expanded="false" aria-controls="collapseTwo2">
      <h5 class="mb-0">Pielāgoti attēli</h5>
    </a>
  </div>
  <!-- Card body -->
  <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
    data-parent="#accordionEx">
    <div class="card-body">
      bla bla bla.... teksts
    </div>
  </div>
</div>

<!-- Accordion card -->
<div class="card">
  <!-- Card header -->
  <div class="card-header" role="tab" id="headingThree3">
    <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
      aria-expanded="false" aria-controls="collapseThree3">
      <h5 class="mb-0">Interaktīvs dizains</h5>
    </a>
  </div>
  <!-- Card body -->
  <div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3"
    data-parent="#accordionEx">
    <div class="card-body">
      bla bla bla.... teksts
    </div>
  </div>
</div>

</div>
*/