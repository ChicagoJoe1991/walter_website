const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li')
    
    
    
    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            }else{
            link.style.animation = `navLinkFade 2s ease forwards ${index / 5}s`;
            }
        })

        //burger animation
        burger.classList.toggle('bun');
        
    });

    
}
navSlide();
// // // pin nav bar to top of mobile view port

// // //when the user scrolls the page, execute stickyNav() function

 window.onscroll = function() {stickyNav()};
// // //get the nav bar
 let navbar = document.getElementById('nav-bar');
// // //get the offset position of the navbar
 let snavbar = navbar.offsetTop;
 console.log(snavbar);
// // //add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav(){
     if(window.pageYOffset >= snavbar){
       navbar.classList.add('snavbar')
   }else{
         navbar.classList.remove('snavbar');
    }
 }


//project notecard animations

$(document).ready(function() {
    $('.proj-list a li').hover(function() {
        $(this).animate({
            left: 20,
            bottom: 20,
            height: '310px',
            width: '510px',
            opacity: '0.95', 
        });
    },
    function() {
        $(this).animate({
            left: 0,
            bottom: 0,
            height: '300px',
            width: '500px',
            opacity: '1' 
        });
    });
});



