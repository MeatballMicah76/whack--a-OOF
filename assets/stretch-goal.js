window.onload = function() {
  var dirt = document.querySelectorAll('.dirt');
  var sound = document.getElementById('sound');
  var grid = document.getElementById('dirt-box');
  // 1. Create a variable called numRows. Set it equal to 3.
  var numRows = 3;
  // 2. Create a variable row0.
  // Store the row0-container.
  var row0 = document.getElementById("row0-container");
  // 3. Create a variable row1.
  // Store the row1-container.
  var row1 = document.getElementById("row1-container");
  // 4. Create a variable row2.
  // Store the row2-container
  var row2 = document.getElementById("row2-container");

  for (let i = 0; i < dirt.length; i++) {
    dirt[i].addEventListener('click', function() {
      if (dirt[i].innerHTML) {
        sound.play();
        dirt[i].innerHTML = "";
      } else {
        console.log("Nothing there.");
      }
    });
  };

  setInterval(setMole,1000);

  // Stretch Goal
  // checkNeighbor will check to see if there are any
  // neighbors at the most recently added mole's row and
  // position in that row.
  function checkNeighbor(row, pos) {
    // 5. Create a variable randRow.
    // Store a random number from from 0 to numRows to represent a row.
    // Should return 0, 1, or 2.
    var rand = Math.random() * (3 - 0) + 0;
    var randRow = rand;

    // 6. Create a variable setRow.
    // Do not assign anything to it yet.
    var setRow;

    // 7. Create a switch statement that will switch
    // based on randRow.
    // If it is 0, setRow = row0.
    // If it is 1, setRow = row1.
    // If it is 2, setRow = row2.
    // Default: console.log("Something in the checkNeighbor switch
    // isn't right!")
    // Remember, row0, row1, row2 are nodelists!






    // 8. Create an if statement to check if the position is
    // the FIRST position in that row. What pos value
    // corresponds to the FIRST position in a row?
      // If so, check if the element to the RIGHT has anything in it.
        // If there's a neighbor, call newDirt(setRow).


    // 9. Create an else if statement to check if the position is
    // the last position in that row.
      // If so, check if the element to the LEFT has anything in it.
        // If there's a neighbor, call newDirt(setRow).


    // 10. Create an else statement.
      // Check if the element to the right or left has anything in it.
        // If so, call newDirt(setRow).



  } //checkNeighbor END

  // Stretch Goal
  // newDirt will create a new mole hole that moles can pop
  // out of.
  function newDirt(row) {
    // 11. Create a variable div.
    // Store a newly created 'div' element.
    var

    // 12. Create a variable className.
    // Do not assign anything to it yet.
    var

    // 13. Create a switch statement that switches the
    // row parameter in the newDirt function.
    // If it is row0, set className = "dirt row0".
    // If it is row1, set className = "dirt row1".
    // If it is row2, set className = "dirt row2".
    // Why? We want the function setMole to recognize that
    // this newly created dirt is part of the row that moles
    // can come out from. Also, to style it the same way as the
    // regular dirt hole.





    // 14. Set the class of div to className.
    // Hint: Look up JS setAttribute.


    // 15. Add an EventListener to the div that listens for a click.
    // Check if there's anything inside div.
    // If there is, play the sound, then remove the "mole".
    // Else, console.log("Nothing there").


    // 16. Append the div to the row.
  } // newDirt(row) END

  // Stretch Goal
  function setMole() {
    // 17. Create a "mole".
    var mole = document.createElement('div');
    mole.setAttribute('class', 'mole');

    // 18. Create a variable called randRow.
    // Store a random number to represent a row.
    // Should return 0, 1, or 2.
    var

    // 19. Create a variable called className
    // Store a string to represent the name of the class
    // (row0, row1, row2) using the random number
    // generated above.
    var

    // 20. Create a variable called currentRow.
    // Use a DOM method to store the respective row by className.
    var

    // 21. Create a variable called randPos.
    // Store a random number to represent the position of
    // the dirt hole in the currentRow nodelist.
    var

    // 22. Create an if statement.
    // If the innerHTML of the dirt hole at randPos in the currentRow
    // has nothing inside of it, append a mole to it and check its neighbors.
    // Else, console.log('Too many moles!').
    if (currentRow[randPos].innerHTML === "") {
      // Append a mole to the current hole.

    } else {
      console.log("Too many moles.");
    }

  } // setMole() END


}
