// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change hero background image every 5 minutes
function changeHeroBackground() {
    const hero = document.getElementById('hero');
    hero.style.backgroundImage = `url('https://source.unsplash.com/random/1600x900/?wifi,technology&t=${new Date().getTime()}')`;
}

setInterval(changeHeroBackground, 5 * 60 * 1000); // Change every 5 minutes

// Add hover effect to content items
const contentItems = document.querySelectorAll('.content-item');
contentItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.3s ease';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});
