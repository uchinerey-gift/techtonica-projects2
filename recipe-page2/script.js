// === BOOT: Run JS after the page loads ===
document.addEventListener("DOMContentLoaded", function () {
    // Base grabs
    const ingredientItems = document.querySelectorAll("#ingredients-list li");
    const checkedCountDisplay = document.getElementById("checked-count");
    const notesButton = document.getElementById("add-note-btn");
    const clearButton = document.getElementById("clear-checks-btn");
    const toggleInstructionsBtn = document.getElementById("toggle-instructions-btn");
    const notesArea = document.getElementById("ingredients");
    const instructionsList = document.getElementById("instructions-list");

    // === FEATURE 1: Ingredient Checkboxes + Strike-through ===
    ingredientItems.forEach(item => {
        // Create a checkbox for each ingredient
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.style.marginRight = "8px";

        // Add checkbox to the beginning of the ingredient line
        item.prepend(checkbox);

        // When checkbox is clicked: toggle strike-through + update counter
        checkbox.addEventListener("change", () => {
            item.classList.toggle("checked");
            updateCheckedCount();
        });
    });

    // Updates the counter text
    function updateCheckedCount() {
        const checkedItems = document.querySelectorAll(".checked").length;
        checkedCountDisplay.textContent = `Checked: ${checkedItems}`;
    }

    // === FEATURE 2: Add Note Section ===
    notesButton.addEventListener("click", () => {
        const noteBox = document.createElement("textarea");
        noteBox.placeholder = "Write your cooking notes here...";
        noteBox.style.display = "block";
        noteBox.style.marginTop = "10px";
        notesArea.appendChild(noteBox);
    });

    // === FEATURE 3: Clear Ingredient Checks (FULL RESET) ===
    clearButton.addEventListener("click", () => {
        ingredientItems.forEach(item => {
            item.classList.remove("checked"); // remove strike-through
            const box = item.querySelector('input[type="checkbox"]');
            if (box) box.checked = false; // uncheck checkbox itself
        });
        updateCheckedCount(); // reset counter
    });

    // === FEATURE 4: Show / Hide Instructions ===
    toggleInstructionsBtn.addEventListener("click", () => {
        if (instructionsList.style.display === "none") {
            instructionsList.style.display = "block";
            toggleInstructionsBtn.textContent = "Hide Instructions";
        } else {
            instructionsList.style.display = "none";
            toggleInstructionsBtn.textContent = "Show Instructions";
        }
    });
});
