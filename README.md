# whack-a-mole

The first Whac-A-Mole game began as an arcade game with an air cylinder system to power the moles popping out of the "dirt". Take this game to the web!

## Objective

Use **Window setInterval** methods, **HTML Audio**, **JavaScript Functions** and more to create this arcade classic on the web,

## Prerequisites

To complete this project, students should have the following:
* Basic understanding of HTML structures.
* CSS FlexBox
* Intermediate understanding of JavaScript and DOM (setInterval, Functions, Event Listeners)

## Your Challenge

### Part I

To complete Part I, fulfill the following requirements:
1. Set up your project file structure through the command line.
2. Create the following:
* HTML file
* CSS file
* JS file
* Assets folder (from repo)
3. Link all of your files correctly.

---

### Part II HTML

To complete Part II, fulfill the following requirements:

1. Create a ```div``` with an ```id``` of "container". **Inside** of this div, create the following with their correct relationships as indicated by the indentations:
* ```audio``` with ```id``` of "sound" and ```src``` to the whack.mp3 sound file.
* ```div``` with ```id``` of "dirt-box".
  * ```div``` with ```class``` of "row".
    * ```div``` with ```class``` of "dirt".
    * ```div``` with ```class``` of "dirt".
    * ```div``` with ```class``` of "dirt".
  * ```div``` with ```class``` of "row".
    * ```div``` with ```class``` of "dirt".
    * ```div``` with ```class``` of "dirt".
    * ```div``` with ```class``` of "dirt".
  * ```div``` with ```class``` of "row".
    * ```div``` with ```class``` of "dirt".
    * ```div``` with ```class``` of "dirt".
    * ```div``` with ```class``` of "dirt".

---

### Part III CSS

To complete Part III, fulfill the following requirements:

1. Target the ```id``` of "container".
* Set the ```width``` to the full view width of the window.
* Set the ```height``` to the full view height of the window.
* Activate flexbox!
* CENTER the items HORIZONTALLY using Flexbox.
* CENTER the items VERTICALLY using Flexbox.

2. Target the ```id``` of "dirt-box".
* Set the ```width``` to "600px".
* Set the ```height``` to "600px".
* Set the ```background-color``` to "rgb(127,204,51)".
* Activate flexbox!
* Allow wrapping to occur using Flexbox.
* CENTER the items HORIZONTALLY using Flexbox.
* CENTER the items VERTICALLY using Flexbox.
* Curve the edges a little (30px). Which property influences the edges of our element?
* Set the ```border``` to "10px solid darkgreen".

3. Target the ```class``` of "row".
* Set the ```width``` to the full width of its parent element.
* Activate Flexbox!
* Place SPACE-AROUND the elements HORIZONTALLY.

4. Target the ```id``` of "mole".
* Set the ```width``` to "80px".
* Set the ```height``` to "80px".
* Make the element a circular shape!
* Set the ```background-color``` to "grey".

5. Target the ```class``` of "dirt".
* Set the ```width``` to "80px".
* Set the ```height``` to "80px".
* Make the element a circular shape!
* Set the ```background-color``` to "rgb(205,133,63)".
* Set the ```border``` to "10px solid rgb(139,69,19)".

---

### Part IV JS

To complete Part IV, fulfill the following requirements:

1. Create a ```window.onload``` function that will run your function when the window loads as follows:

``` javascript
window.onload = function() {
  //Place the rest of your code in here.
}
```  

2. Create a ```variable``` named "dirt" that will store the dirt elements by class name.

3. Create a ```variable``` named "sound" that will store the audio element by id.

4. Create a ```variable``` named "grid" that will store the "dirt-box" element by id.

5. Add ```Event Listeners``` to all dirt elements that will listen for a click. In each Event Listener, create the following:
* An ```if statement``` that checks if anything exists in the dirt's innerHTML. If so, play the audio and reset the innerHTML so nothing is inside (clear the mole out!). Else, ```console.log``` that nothing is there.

6. Create a ```function``` called setMole. In this function, create the following:
* Create a ```variable``` called mole that will store a newly created ```div``` element.
* Set the "id" to "mole".
* Create a variable to store a random integer from 0 to the length of the dirt array.
* Create an if statement that checks if there is nothing in the innerHTML a random dirt pile, append the mole to that dirt pile. Else, ```console.log``` "There are too many moles!".

7. We want this function, setMole, to run every 3 seconds! Implement the code to do that.

## Stretch Goals
1. Add to this game by making it so that if there are neighboring moles in a row, append a new dirt mound to the dirt box that a mole can come out from! Follow the guidelines below:

1. Modify your HTML to look like the following:
``` html
<div id="container">
  <audio src="assets/whack.mp3" id="sound"></audio>
  <div id="dirt-box">
    <div class="row" id="row0-container">
      <div class="dirt row0"></div>
      <div class="dirt row0"></div>
      <div class="dirt row0"></div>
    </div>

    <div class="row" id="row1-container">
      <div class="dirt row1"></div>
      <div class="dirt row1"></div>
      <div class="dirt row1"></div>
    </div>

    <div class="row" id="row2-container">
      <div class="dirt row2"></div>
      <div class="dirt row2"></div>
      <div class="dirt row2"></div>
    </div>

  </div>
</div>
```

2. Modify the "dirt-box" in your CSS to look like the following:
``` CSS
#dirt-box {
  min-height: 500px;
  max-width: calc(100vw);
  max-height: calc(100vh);
  background-color: rgb(127, 204, 51);
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 10px solid darkgreen;
}
```

3. Look at the stretch-goal.js file and follow the code comments. Save it to your file structure and change the source of the script file in the index.html to this js file so that your original code is preserved.

In this JS file, you will create new or modified functions with what its doing explained as follows:

* **checkNeighbor(row, pos)**
  * Takes in a row and position to check. If the most recently added mole is in the first row at the 2nd hole, it will check if it has neighbors to the right or left of it. If there is a neighbor, it will invoke a function to create and append a new dirt hole at a random row (newDirt(row)).

* **newDirt(row)**
  * Takes in a random row to append a newDirt to. This function will create a new dirt hole, make sure this dirt hole has the correct class names, and also that it is clickable and "hammerable".

* **setMole()**
  * The modified set mole sets a new mole to a random row and position.

## Stretchy Stretch Goal

Modify your whac-a-mole into a Pokemon whac-a-mole game or any other character whac-a-mole game.

1. Change aspects in your setMole() function so that the mole is an image of your character instead!
2. Randomize what characters get placed!
3. Keep track of points! If it's a special character that gets whacked, give more points. Give your users a way to view how many points they've earned so far.
  * Create a variable to store your score display.
  * Create a variable called score and set it equal to 0.
  * In your ```setMole()``` function, give your mole an id of the current Pokemon's name.
  * Create a function called ```checkPokemon``` that will have a parameter to store the id of the Pokemon.
    * In this function, create a switch statement that will switch the id of the Pokemon parameter.
      * If it is a certain Pokemon's name, add to the score a certain amount of points! (E.g. case: 'pikachu', score += 3)
      * In the places where you add an Event Listener, use the newly created checkPokemon(idOfPokemon) function to update the score variable accordingly. How do we get the id of dirt[i]? ```dirt[i].childNodes``` returns a nodelist. How do we access the id of the element we want?
      * After the score has been correctly updated, update the ```innerHTML``` of the score display. 
