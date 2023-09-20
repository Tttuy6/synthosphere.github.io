// Alert to make people press something on the site.
window.alert('Hi!  This sound effect machine requires you to click the page for it to work.');

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
  '1': 'sfx/alarm.mp3',
  '2': 'sfx/bigBrain.mp3',
  '3': 'sfx/memeFinals.mp3',
  '4': 'sfx/oof.mp3',
  '5': 'sfx/widePutin.mp3',
  '6': 'sfx/pufferFish.mp3',
  '7': 'sfx/augh.mp3',
  '8': 'sfx/aughAugh.mp3',
  '9': 'sfx/goofy-yell.mp3',
  '0': 'sfx/i-like-ya-cut-g.mp3',
  'aUpper': 'sfx/i-will-send-you-to-jesus.mp3',
  'sUpper': 'sfx/sad_song.mp3',
  'dUpper': 'sfx/sike.mp3',
  'fUpper': 'sfx/trololo.mp3',
};

// Handle key press event
document.addEventListener('keypress', function(event) {
  const key = event.key;
  let sound;

  if (key === key.toLowerCase()) {
    sound = soundEffects[key.toLowerCase()];
  } else {
    sound = soundEffects[key.toLowerCase() + 'Upper'];
  }

  if (sound) {
    playSound(sound);
  }
});

// Function to play a sound
function playSound(soundUrl) {
  const audio = new Audio(soundUrl);
  audio.play();
}


function playFromClick(link) {
  var sound = new Audio(link);
  sound.play();
}