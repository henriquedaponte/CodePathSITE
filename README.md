# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Henrique da Ponte**

Time spent: about **4** hours spent in total

Link to project: https://glitch.com/edit/#!/lightsound-memory-game

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

    https://www.w3schools.com/cssref/css_colors.asp

    https://stackoverflow.com/questions/5836833/create-an-array-with-random-values

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

    https://stackoverflow.com/questions/44729980/how-do-i-ensure-buttons-stay-on-separate-lines

    https://www.wikihow.com/Code-an-Alert-with-a-Variable-Using-Javascript#:~:text=Type%20%22alert%20(%22Hey%2C,%22Heya%2C%20Trevor!%22.)

    https://pages.mtu.edu/~suits/notefreqs.html

    https://www.waitingforfriday.com/?p=586#:~:text=In%20addition%2C%20if%20the%20player,harmonious%20no%20matter%20the%20sequence).

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

    A challenged I encountered while programming the game was how to generate a new random array of integers to serve as the pattern for every iteration of the game. At first, I tried to use the same array as used in the walkthrough and just shuffle it up, but then I realized that meant it would always be the same numbers in the array that made up the sequence and I wanted a better solution. After looking through a few similar cases on stack overflow I decided that creating a new array using Math.random at the startGame() function was a better solution. However, it kept creating arrays with 0, which would not play any buttons in the game. So I went back to the internet to read more about the Math.random() function and found a way to make all integers in the array within a certain range, limiting not only the maximum value but also the previous, and that made it work perfectly.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

    In this project, I learned so much about web development and how HTML, CSS, and Javascript can work together in order to make the desired web page. A couple of questions that remain regarding web development would be:
    
    1 - In what ways and what techniques could we use to further optimize our program, and also different kinds of programs?

    2- Since Javascript assigns data types dynamically, how does it handle more complex data structures?

    3- How could we expand our recently gained knowledge to create more elaborate and complex web pages, such as a social media page, or a finance app?


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

    If I had a few more hours to work on the project I would add a sound that would be displayed when you win the game featuring applauses, trumpets, and a voice saying "you win" (I would have to edit and merge some audio files to make that happen), and also follow the same logic for when you lose the game. I would also change the frequency of the sounds to frequencies of consonant notes that when played one after the other would sound like the harmony of a song. That way the user would be playing the game and creating pleasant music at the same time.



## License

    Copyright Henrique da Ponte

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
