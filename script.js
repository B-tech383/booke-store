// Create an Intersection Observer to detect when elements come into view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'slide-up-visible' class to the element when it comes into view
            if (!entry.target.classList.contains('slide-up-visible')) {
                entry.target.classList.add('slide-up-visible');
            }
        } else {
            // Remove the 'slide-up-visible' class when the element goes out of view
            if (entry.target.classList.contains('slide-up-visible')) {
                entry.target.classList.remove('slide-up-visible');
            }
        }
    });
}, {
     // Trigger when 50% of the element is in the viewport
});

// Observe all elements with the 'slide-up' class
document.querySelectorAll('.slide-up').forEach(element => {
    observer.observe(element);
});
