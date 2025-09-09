// Question 7: Basic Callbacks in Action
// Generic function that takes an array and a callback
function processArray(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i])); // apply callback to each item
  }
  return result;
}

// Callback functions
function double(num) {
  return num * 2;
}
function square(num) {
  return num * num;
}
function addTen(num) {
  return num + 10;
}

// Test with [1, 2, 3, 4, 5]
const numbers = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);
console.log("Doubled:", processArray(numbers, double)); // [2, 4, 6, 8, 10]
console.log("Squared:", processArray(numbers, square)); // [1, 4, 9, 16, 25]
console.log("AddTen:", processArray(numbers, addTen)); // [11, 12, 13, 14, 15]
Explanation;
/* processArray is a generic function that takes a callback and applies it to each number.

double, square, and addTen are just instructions (passed as callbacks).

When you run processArray(numbers, double), the function applies the double callback to each number.

Why it’s useful: Without callbacks, you’d need doubleArray, squareArray, etc. Callbacks let one function handle many transformations.*/

// Question 8: Simulating Asynchronous Operations

// Fake API call simulation
function simulateApiCall(callback) {
  console.log("Simulating API call... please wait...");
  setTimeout(() => {
    const data = { message: "Data loaded successfully!" };
    callback(data); // call the callback after 2 seconds
  }, 2000);
}

// Callback handlers
function displaySuccess(data) {
  console.log("Data received:", data);
}
function displayError(error) {
  console.log(" Error occurred:", error);
}

// Test simulation
simulateApiCall(displaySuccess);

// --- More complex chaining ---
function fetchUserProfile(userId, callback) {
  setTimeout(() => {
    const profile = { id: userId, name: "Alice" };
    console.log("User profile fetched:", profile);
    callback(profile);
  }, 1000);
}

function fetchUserPosts(userId, callback) {
  setTimeout(() => {
    const posts = [
      { id: 1, userId, content: "Hello world" },
      { id: 2, userId, content: "Learning callbacks!" },
    ];
    console.log("User posts fetched:", posts);
    callback(posts);
  }, 1500);
}

// Chain them: first profile, then posts
fetchUserProfile(101, (profile) => {
  fetchUserPosts(profile.id, (posts) => {
    console.log("Final result ->", { profile, posts });
  });
});

/*Explanation

simulateApiCall uses setTimeout to simulate a network delay.

Key idea: You can’t just return the data because it’s not ready yet—callbacks allow handling it after it’s ready.

fetchUserProfile → fetchUserPosts shows chaining callbacks (first fetch profile, then use its ID to fetch posts).

Problem: Too much chaining becomes “callback hell” (deep nesting).
*/

// Question 9: Event-Style Callbacks

function createButton(name) {
  let onClickCallback = null; // store callback

  return {
    onClick: function (callback) {
      onClickCallback = callback; // register callback
    },
    trigger: function () {
      if (onClickCallback) {
        console.log([`${name} Button Clicked`]);
        onClickCallback(); // run callback later
      } else {
        console.log([`${name} Button has no action`]);
      }
    },
  };
}

// Example usage
const saveButton = createButton("Save");
const cancelButton = createButton("Cancel");

// Register callbacks
saveButton.onClick(() => console.log(":floppy_disk: Saving data..."));
cancelButton.onClick(() => console.log(":x: Cancelling operation..."));

// Trigger them
cancelButton.trigger();
saveButton.trigger();
/*Explanation
createButton creates a “virtual button” with two methods:

.onClick(callback) → register what should happen when clicked.

.trigger() → simulate clicking the button and run the registered callback.

This mirrors real event systems in browsers (like addEventListener).

Benefit: Separating when you register the callback from when it executes makes the system flexible.

This is the foundation of event-driven programming (UI apps, Node.js).*/
