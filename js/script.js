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

// document.getElementById('contactForm').addEventListener('submit', function (e) {
//     e.preventDefault();
    
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;
    
//     if (name && email && message) {
//         alert('Message Sent! Thank you for reaching out, ' + name + '.');
//         document.getElementById('contactForm').reset();
//     } else {
//         alert('Please fill in all fields.');
//     }
// });
