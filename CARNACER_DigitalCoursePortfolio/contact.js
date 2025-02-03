// Toggle Button Functionality
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle-btn');
    const contactSection = document.querySelector('.contact-section');

    toggleBtn.addEventListener('click', () => {
        contactSection.classList.toggle('active');

        // Change button text based on state
        if (contactSection.classList.contains('active')) {
            toggleBtn.textContent = 'Hide Contact Details';
        } else {
            toggleBtn.textContent = 'View Contact Details';
        }
    });
});
