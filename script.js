let hunger = 50;
let happiness = 50;
let energy = 50;

const petImage = document.getElementById('petImage');
const hungerProgress = document.getElementById('hunger');
const happinessProgress = document.getElementById('happiness');
const energyProgress = document.getElementById('energy');

document.getElementById('feedBtn').addEventListener('click', () => {
    hunger = Math.max(0, hunger - 10);
    updateAttributes();
});

document.getElementById('playBtn').addEventListener('click', () => {
    happiness = Math.min(100, happiness + 10);
    energy = Math.max(0, energy - 10);
    updateAttributes();
});

document.getElementById('sleepBtn').addEventListener('click', () => {
    energy = Math.min(100, energy + 10);
    hunger = Math.min(100, hunger + 5);
    updateAttributes();
});

function updateAttributes() {
    hungerProgress.value = hunger;
    happinessProgress.value = happiness;
    energyProgress.value = energy;

    if (hunger > 70) {
        petImage.src = 'pet-hungry.png';
    } else if (happiness < 30) {
        petImage.src = 'pet-sad.png';
    } else if (energy < 30) {
        petImage.src = 'pet-tired.png';
    } else {
        petImage.src = 'pet-happy.png';
    }
}

// Update attributes over time
setInterval(() => {
    hunger = Math.min(100, hunger + 1);
    happiness = Math.max(0, happiness - 1);
    energy = Math.max(0, energy - 1);
    updateAttributes();
}, 5000);
