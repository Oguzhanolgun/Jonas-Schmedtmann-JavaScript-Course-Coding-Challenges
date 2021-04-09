// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

/*
Here the closure is necessary because by the time the callback function (event handler) is executed, the execution context of the IIFE would have been gone already. The callback function is attached to the body element, and it's waiting for some events to happen there. When the event happens, it will be executed, even though the environment in which it was created is already gone.
However, here it is still able to access the variables that were created in that variable environment by the time
the function was born. So the IIFE is the birthplace of the event handler function, therefore the function remembers all the variables present at a time of it's birth, and it is able to use them all
*/
