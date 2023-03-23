const button = document.getElementById('confetti-button');
const jsConfetti = new JSConfetti();

button.addEventListener('click', () => {
  jsConfetti.addConfetti({
    confettiRadius: 6,
    confettiNumber: 800,
    //emojis: ['🌈'],
    confettiColors: ['#ff0000', '#ff7300', '#ffbb00', '#4dff00', '#0099ff', '#ff00de'],
  });
});
