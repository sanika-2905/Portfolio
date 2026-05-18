const pic = document.getElementById('profile-pic');

pic.addEventListener('click', () => {
    pic.classList.add('clicked');
    setTimeout(() => {
        pic.classList.remove('clicked');
    }, 400);
});

// Form Feedback
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you, Your message has been sent.');
    e.target.reset();
});