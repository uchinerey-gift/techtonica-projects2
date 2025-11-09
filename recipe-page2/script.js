// Wait for the page to fully load before running any JS
document.addEventListener("DOMContentLoaded", function () {

    // Select all ingredient list items so we can add click behavior to each one
    const ingredientItems = document.querySelectorAll("#ingredients-list li");

    // Select display that shows how many items are checked
    const checkedCountDisplay = document.getElementById("checked-count");

    // Select buttons used for interactivity
    const notesButton = document.getElementById("add-note-btn");
    const clearButton = document.getElementById("clear-checks-btn");
    const toggleInstructionsButton = document.getElementById("toggle-instructions-btn");

    // Select the area where new notes will be added
    const notesArea = document.getElementById("ingredients"); // notes will appear under ingredients

    // Select instructions list (so we can hide/show it)
    const instructionsList = document.getElementById("instructions-list");

    // --- FEATURE 1: Click ingredient to check it off ---
    // (Adds or removes the .checked class which adds strike-through in CSS)
    ingredientItems.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("checked");
            updateCheckedCount();
        });
    });

    // Update how many items are checked (displayed at the top)
    function updateCheckedCount() {
        const checkedItems = document.querySelectorAll(".checked").length;
        checkedCountDisplay.textContent = `Checked: ${checkedItems}`;
    }

    // --- FEATURE 2: Add a Notes Text Box ---
    // Creates a place for the user to type cooking notes
    notesButton.addEventListener("click", () => {
        const noteBox = document.createElement("textarea");
        noteBox.placeholder = "Write your cooking notes here...";
        noteBox.style.display = "block";
        noteBox.style.marginTop = "10px";
        notesArea.appendChild(noteBox);
    });

    // --- FEATURE 3: Clear All Checked Ingredients ---
    // Removes the strike-through class and resets the count
    clearButton.addEventListener("click", () => {
        ingredientItems.forEach(item => item.classList.remove("checked"));
        updateCheckedCount();
    });

    // --- FEATURE 4: Show/Hide Instructions ---
    // Makes the page cleaner and easier to read
    toggleInstructionsButton.addEventListener("click", () => {
        instructionsList.classList.toggle("hidden");

        // Change button text based on visibility
        if (instructionsList.classList.contains("hidden")) {
            toggleInstructionsButton.textContent = "Show Instructions";
        } else {
            toggleInstructionsButton.textContent = "Hide Instructions";
        }
    });

});
