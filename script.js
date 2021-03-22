//Global Constants
const cluePauseTime = 50; // How long to pause in between clues
const nextClueWaitTime = 500; // How long to wait before starting playback of the clue sequence

// Global Variables
var pattern;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // Must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime; // How long to hold each clue´s light/sound
var mistakes;

// Page Initialization
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();

// Init Sound Synthesizer
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

// Frequency map based on real "Simon Says" game frequencies
const freqMap = {
  1: 391.995, // Green
  2: 195.998, // Blue
  3: 329.628, // Red
  4: 261.626, // Yellow
  5: 523.25, // Purple
  6: 164.81, // Brown
  7: 277.18 // Game Lost Sound
}

function startGame(){
  // Initialize game variables
  progress = 0;
  mistakes = 0;
  gamePlaying = true;
  clueHoldTime = 420; // Reset speed before new game
  pattern = generatePattern(); // Start each game with a new sequence
  
  // Swap the Start and Stop Buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence();
}

function stopGame(){
  // Update game variables
  gamePlaying = false;
  
  // Swap the Stop and Start Buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

function playTone(btn, len){
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05,0.025)
  tonePlaying = true;
  setTimeout(function(){
    stopTone()
  }, len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
    tonePlaying = true;
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0, context.currentTime + 0.05,0.025);
  tonePlaying = false;
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; // Set delay to initial wait time
  for(let i = 0; i <= progress; i++){ // For each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // Set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    
    // Make speed increasingly faster
    // This is the same increase in speed that the real games has
    if(i == 3){
      clueHoldTime = 320; 
    }
    
    if(i == 7){
      clueHoldTime = 220; 
    }
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congratulations! You won the game.");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter]== btn){
    // Guess was correct
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        // Game won!
        winGame();
      }else{
        // Pattern Correct, go to next clue sequence
        progress++;
        playClueSequence();
      }
    }else{
      // Guess correct, check next one
      guessCounter++
    }
  }else{
    // Guess was incorrect
    
    if(mistakes < 2){
      
      // add a strike
    mistakes++;
    
    // Alert user
    alert("You have made a mistake! You have "+ (3 - mistakes) +" tries left")
    }else{
    
    // If user makes 3 mistakes game is lost
      loseGame();
    }
  }
}

function generatePattern(){
  var newPattern = Array.from({length: 12}, () => Math.floor(Math.random() * (7-1)+1));
  
  return newPattern;
}