// JavaScript for an interactive effect

// This script adds a "slide-in-up" effect to elements as they enter the viewport.
// It uses the Intersection Observer API for efficient performance.

document.addEventListener('DOMContentLoaded', () => {
    // Function to reveal elements on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Check if the element is currently visible in the viewport
            if (entry.isIntersecting) {
                // If it is, add the 'slide-in-up-visible' class to trigger the animation
                entry.target.classList.add('slide-in-up-visible');
            }
        });
    }, { threshold: 0.1 }); // The threshold determines when the observer triggers. 0.1 means 10% of the element is visible.

    // Select all elements with the 'slide-in-up' class
    document.querySelectorAll('.slide-in-up').forEach(element => {
        // Initially set the opacity to 0 to prepare for the animation
        element.style.opacity = '0';
        // Start observing each element
        observer.observe(element);
    });
});
