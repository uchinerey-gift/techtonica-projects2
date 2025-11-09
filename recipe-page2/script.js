// === BOOT: run JS after the page loads ===
document.addEventListener("DOMContentLoaded", function () {
    // Base element grabs
    const ingredientItems = document.querySelectorAll("#ingredients-list li");
    const checkedCountDisplay = document.getElementById("checked-count");
    const notesButton = document.getElementById("add-note-btn");
    const clearButton = document.getElementById("clear-checks-btn");
    const toggleInstructionsBtn = document.getElementById("toggle-instructions-btn");
    const notesArea = document.getElementById("ingredients");
    const instructionsList = document.getElementById("instructions-list");

    // === FEATURE 1: Ingredient Checkboxes & Strike-Through ===
    ingredientItems.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("checked");
            updateCheckedCount();
        });
    });

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

    // === FEATURE 3: Clear Ingredient Checks ===
    clearButton.addEventListener("click", () => {
        ingredientItems.forEach(item => item.classList.remove("checked"));
        updateCheckedCount();
    });

    // === FEATURE 4: Show/Hide Instructions Toggle ===
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
