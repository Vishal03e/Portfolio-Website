let lastScrollTop = 0; // Store the last scroll position

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const nav = document.getElementById('nav');

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        nav.classList.add('glass-effect'); // Add the glass effect class when scrolling down
    } // else {
    //     // Scrolling up
    //     nav.classList.remove('glass-effect'); // Remove the glass effect class when scrolling up
    // }

    lastScrollTop = scrollTop; // Update the last scroll position
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for demo purposes
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Message sent successfully!");
    } else {
        alert("Please fill in all fields.");
    }
});


