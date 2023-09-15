// Define sound effect URLs
const soundEffects = {
  'a': 'sfx/vine-boom.mp3',
  's': 'sfx/android.mp3',
  'd': 'sfx/airhorn.mp3',
  'f': 'sfx/bruh.mp3',
  'g': 'sfx/imposter.mp3',
  'h': 'sfx/sicko.mp3',
  'j': 'sfx/sloppy-fart.mp3',
  'k': 'sfx/hog-rider.mp3',
  'l': 'sfx/badumtss.mp3',
  'q': 'sfx/bingChilling.mp3',
  'w': 'sfx/fnDeathSound.mp3',
  'e': 'sfx/fbi.mp3',
  'r': 'sfx/run.mp3',
  't': 'sfx/spooderman.mp3',
  'y': 'sfx/lightskin-rizz.mp3',
  'u': 'sfx/john-cena-intro.mp3',
  'i': 'sfx/god-damn-.mp3',
  'o': 'sfx/Sad.mp3',
  'p': 'sfx/whatDaDogDoin.mp3',
  'z': 'sfx/fn-default-bb.mp3',
  'x': 'sfx/french-meme-song.mp3',
  'c': 'sfx/emotional-damage.mp3',
  'v': 'sfx/bababooey.mp3',
  'b': 'sfx/error.mp3',
  'n': 'sfx/uwu.mp3',
  'm': 'sfx/uwu2.mp3',
};

// Handle key press event
document.addEventListener('keypress', function(event) {
  const key = event.key.toLowerCase();
  const sound = soundEffects[key];

  if (sound) {
    playSound(sound);
  }
});

// Function to play a sound
function playSound(soundUrl) {
  const audio = new Audio(soundUrl);
  audio.play();
}
