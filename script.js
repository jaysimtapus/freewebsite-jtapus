// Array of cat facts
const catFacts = [
    "Cats spend 70% of their lives sleeping.",
    "A group of cats is called a clowder.",
    "Cats have over 20 vocalizations, including the purr, meow, and hiss.",
    "A cat's hearing is much more sensitive than a human's or dog's.",
    "Cats have a third eyelid called the 'haw' to protect their eyes.",
    "The first cat in space was a French cat named Felicette in 1963.",
    "Cats can rotate their ears 180 degrees.",
    "A cat's nose print is unique, like a human's fingerprint.",
    "Cats can jump up to six times their length.",
    "The oldest known pet cat was found in a 9,500-year-old grave on Cyprus."
];

// Function to set a random cat fact
function setRandomCatFact() {
    const factElement = document.getElementById('cat-fact');
    const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];
    factElement.textContent = randomFact;
}

// Set initial cat fact and change it every 24 hours
setRandomCatFact();
setInterval(setRandomCatFact, 24 * 60 * 60 * 1000);

// Change background image every hour
function changeBackgroundImage() {
    const backgroundContainer = document.querySelector('.background-container');
    backgroundContainer.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?cat&t=${new Date().getTime()}')`;
}

setInterval(changeBackgroundImage, 60 * 60 * 1000);
