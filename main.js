let text = document.querySelector('section.container textarea');
function speak() {
  responsiveVoice.speak(text.value, "UK English Male", {rate: 1});
};