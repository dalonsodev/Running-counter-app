// grab the DOM elements to work with
const countEl = document.getElementById("count-el")
const incrementBtn = document.getElementById("increment-btn")
const saveEl = document.getElementById("save-el")
const saveBtn = document.getElementById("save-btn")
const resetBtn = document.getElementById("reset-btn")

// Initialize a variable to store the count
let count = 0

// 1. Function that increments the count and displays it
function increment() {
   count++
   countEl.textContent = count
}

// 2. Function that saves (and shows) the count, shows the reset btn and calls the resetCounter() function
function save() {
   saveEl.textContent += count + " - "
   resetBtn.classList.remove("hidden")
   resetCounter()
}

function resetCounter() {
   count = 0
   countEl.textContent = 0
}

function resetEntries() {
   saveEl.textContent = "Previous entries: "
   resetBtn.classList.add("hidden")
}

// Add event listeners to trigger the functions
incrementBtn.addEventListener("click", increment)
saveBtn.addEventListener("click", save)
resetBtn.addEventListener("click", resetEntries)