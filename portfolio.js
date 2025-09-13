document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission alert
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for contacting me!');
    });

    // Intersection Observer for animation
    let options = {
        threshold: 0.5
    };

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, options);

    document.querySelectorAll('section').forEach(section => {
        section.style.animationPlayState = 'paused';
        observer.observe(section);
    });
});