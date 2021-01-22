// Select DOM items
const menuBtn = document.querySelector('.humberger');
const menu = document.querySelector('.navbar-container');
const lines = document.querySelectorAll('.line');

// Set initial state of menu

let showMenu = false;

// menuBtn.addEventListener('click',toggleMenu);

menuBtn.addEventListener('click',function(){
  if(!showMenu)
  {
    menuBtn.classList.add('close');
    // menuBtn.style.backgroundColor = "#fff";
  
    menu.classList.add('show');

    // Set menu state
    showMenu = true;

    for(let i = 0 ; i < lines.length ; i++)
    {
      lines[i].style.backgroundColor = "#fff";
    }
  }else{

    menuBtn.classList.remove('close');
    // menuBtn.style.backgroundColor = "#ccc";
    
    menu.classList.remove('show');
    // Set menu state
    showMenu = false;

    // for(let i = 0 ; i < lines.length ; i++)
    // {
    //   lines[i].style.backgroundColor = "#2a2d2e";
    // }

  }
});


// Isotop Script (Gallery filter)

// init Isotope
var $grid = $('.grid').isotope({
  
  layoutMode: 'packery',

  packery: {
    columnWidth: '.grid-item',
    gutter: '.gutter-sizer'
  },
  itemSelector: '.grid-item',
  percentPosition: true
  

});

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


// Make the current category btn active (Bold font)

document.addEventListener('click',function(){

  if (!event.target.classList.contains('btn-filter')) return;

  // Add the active class
  event.target.classList.add('active');
  
  // Get all nav links
  var links = document.querySelectorAll('.btn-filter');
  
  // Loop through each link
	for (var i = 0; i < links.length; i++) {

		// If the link is the one clicked, skip it
		if (links[i] === event.target) continue;

		// Remove the .active class
		links[i].classList.remove('active');

	}

},false);


// swiper get in touch section init

var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


/*
  Get in touch section | on mouse over the discover list link 
  show me the description
*/

// Get all discover list link

const work_together = document.getElementById('workTogether');
const my_Services = document.getElementById('myServices');
const get_in_touch = document.getElementById('getInTouch');

const default_desc = document.querySelector('.default-desc');
const work_together_desc = document.querySelector('.work-together-desc');
const my_services_desc = document.querySelector('.my-services-desc');
const get_in_touch_desc = document.querySelector('.get-in-touch-desc');


// testimonials slider

var swiper = new Swiper('.testimonials-slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 10
    },

    // when window width is >= 800px
    800: {
      slidesPerView: 2,
      spaceBetween: 10
    },

    // when window width is >= 1000px
    1000: {
      slidesPerView: 3,
      spaceBetween: 20  
    }
  },
  slidesPerView: 1,
  centeredSlides: true,
  paginationClickable: true,
  loop: true,
  spaceBetween: 30,
  slideToClickedSlide: true
});

// subscribe form for footer

function animated_label(arg1,arg2)
{
  const al = document.querySelector(arg1); // al = animated label
  const ai = document.querySelector(arg2); // ai = animated input

  const label_style_focus = {
    left:'20%',
    opacity:"0"
  }
  const label_style_blur = {
    left:'0%',
    opacity:"1"
  };

  if(ai)
  {
    ai.addEventListener('focus',function(){

      for(i in label_style_focus)
      {
        al.style[i] = label_style_focus[i];
      }
  
    });

    ai.addEventListener('blur',function(){

      for(i in label_style_blur)
      {
        al.style[i] = label_style_blur[i];
      }
  
    });

    // if when inputs value is greater than 0 hide the label
  
    ai.addEventListener("keyup",function(){
  
      if(this.value.length > 0)
      {
        al.style.visibility = "hidden";
      }
      else{
        al.style.visibility = "visible";
      }
  
    });
  }

  

}

animated_label(".name-label",".name-input");
animated_label(".email-label",".email-input");
animated_label(".phone-label",".phone-input");
animated_label(".envato-market-label",".envato-market-input");
animated_label(".subscribe-label",".subscribe-input");


// Navigtion background

/*
Make the navigation bar background visible if the scroll height is grater then the innerHeight of hero secion
*/

const navbar = document.querySelector('.navigation');
const hero = document.querySelector('.hero');
const humberger_line = document.querySelectorAll('.line');
const logo = document.querySelector('.company_logo');
const showNav = 
{
  backgroundColor : "#fff",
  padding : "1rem 5.5rem"
};

const hideNav = 
{
  backgroundColor : "transparent",
  padding : "2rem 3rem"
};

window.addEventListener('scroll',function(){

  if(this.scrollY >= 200)
  {
    //Loop through showNav objects in order to add them to the navbar whene scrolling
    for(i in showNav)
    {
      navbar.style[i] = showNav[i];
    }

    //Change logo color

    logo.src = "img/dark-logo.png";

    //Change humberger lines color

    for(let i = 0 ; i < humberger_line.length ; i++)
    {
      humberger_line[i].style.backgroundColor = "#2a2d2e";
    }

    //If the menu is exisits then remove navbar styles on scroll

    if(menu.classList.contains("show"))
    {
      for(let i = 0 ; i < humberger_line.length ; i++)
      {
        humberger_line[i].style.backgroundColor = "#fff";
      }  

      for(i in hideNav)
      {
        navbar.style[i] = hideNav[i];
      }
    }
  }
  else
  {
    for(i in hideNav)
    {
      navbar.style[i] = hideNav[i];
    }

    logo.src = "img/white-logo.png";

    for(let i = 0 ; i < humberger_line.length ; i++)
    {
      humberger_line[i].style.backgroundColor = "#fff";
    }
  }

});


/*------------------Jump to--------------------*/

var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', 
{
  easing: 'easeInOutQuint',
  speed: 1800 
});

gsap.from('.s1',{
  y:30,
  opacity:0,
  stagger:0.15,
  duration:0.8,
  ease:"Expo.easeInOut",
  delay:2
});

gsap.from('.s2',{
  scrollTrigger:{
    trigger:'.s2', 
    toggleActions:"restart none restart none"
  },
  y:-90,
  opacity:0,
  stagger:0.3,
  duration:0.7,
});

gsap.from('.s3',{
  scrollTrigger:{
    trigger:'.s3', 
    toggleActions:"restart none restart none",
  },
  y:-90,
  opacity:0,
  stagger:0.2,
  duration:0.3,
});

gsap.from('.s4',{
  scrollTrigger:{
    trigger:'.s4',
    toggleActions:"restart none none none"
  },
  y:-40,
  opacity:0,
  stagger:0.2,
  duration:0.5,
});

gsap.from('.s5',{
scrollTrigger:{
  trigger:'.s5',
  toggleActions:"restart none none none"
},
y:-50,
opacity:0,
stagger:0.2,
duration:0.5,
});

gsap.from('.s6',{
  scrollTrigger:{
    trigger:'.s6',
    toggleActions:"restart none none none"
  },
  y:-80,
  opacity:0,
  stagger:0.5,
  duration:0.6,
});

gsap.from('.s7',{
  scrollTrigger:{
    trigger:'.s7',
    toggleActions:"restart none none none"
  },
  y:-40,
  opacity:0,
  stagger:0.2,
  duration:0.5,
});

gsap.from('.s8',{
  scrollTrigger:{
    trigger:'.s8',
    toggleActions:"restart none none none"
  },
  y:-40,
  opacity:0,
  stagger:0.1,
  duration:0.3,
});

gsap.from('.s9',{
  scrollTrigger:{
    trigger:'.s9',
    toggleActions:"restart none none none"
  },
  y:-50,
  opacity:0,
  stagger:0.3,
  duration:0.5,
});

gsap.from('.s10',{
scrollTrigger:{
  trigger:'.s10',
  toggleActions:"restart none restart none"
},
y:-50,
opacity:0,
stagger:0.3,
duration:0.5,
});
  
gsap.from('.s11',{
scrollTrigger:{
  trigger:'.s11',
  toggleActions:"restart none none none"
},
y:-50,
opacity:0,
stagger:0.3,
duration:0.5,
});
  
gsap.to('.transition',{

  y:-800,
  stagger:0.1,
  duration:2.5,
  ease:"Expo.easeInOut"

});

/*-------------------Parallex testimonial---------------------*/

var swiper = new Swiper(".parallex-testimonial-container", {
  pagination: {
    el: ".parallex-testimonial",
    type: "bullets",
  },
  spaceBetween: 150,
  slidesPerView: 1,
  centeredSlides: true,
  paginationClickable: true,
  slideToClickedSlide: true,
});

gsap.from(['.intro-bg','.intro-content'],{
  scrollTrigger:{
    trigger:['.intro-bg','.intro-content'], 
    toggleActions:"restart none restart none"
  },
y:-80,
opacity:0,
stagger:0.2,
duration:0.6,
});

gsap.from(['.secondary-intro-content','.secondary-intro-video'],{
  scrollTrigger:{
    trigger:['.secondary-intro-content','.secondary-intro-video'],
    toggleActions:"restart none restart none"
  },
y:-80,
opacity:0,
stagger:0.2,
duration:0.6,
});

gsap.from('.grid-item',{
  scrollTrigger:{
    trigger:'.grid-item',
    toggleActions:"restart none none none"
  },
y:-50,
opacity:0,
stagger:0.2,
duration:0.5,
});

/*-------------------------------leaflet map init--------------------------------*/

var map = L.map('map').setView([0,0],1);
L.tileLayer('https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=uX8roTDjdJ4o8qccYYt5',{
  attribution: '<a href="https://carto.com/" target="_blank">&copy; CARTO</a> <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);

var marker = L.marker([51.5,-0.09]).addTo(map);

var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', 
{
  easing: 'easeInOutQuint',
  speed: 1800 
});