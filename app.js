const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-ul');
    const navLinks = document.querySelectorAll('.nav-ul li')
    
    
    
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