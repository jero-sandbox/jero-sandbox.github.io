function uScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', ()=> {
        if(window.scrollY > 50) {
            navbar.classList.add('bg-dark');
            navbar.classList.add('nav-sticky');
        } else {
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('nav-sticky');
        }
    });
}

document.addEventListener('DOMContentLoaded', uScroll);