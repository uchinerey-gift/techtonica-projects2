// Wait until the HTML is fully parsed so elements are available
document.addEventListener("DOMContentLoaded", function () {
    console.log("Recipe DOM ready");

    // =============================
    // INGREDIENT CHECKBOXES + COUNT
    // =============================

    // Grab the <ul> that holds all ingredient <li> items
    const ingredientsList = document.getElementById("ingredients-list");

    // If the list exists, get all list items to work with
    const ingredientItems = ingredientsList ? ingredientsList.querySelectorAll("li") : [];

    // For each <li>, create a checkbox and insert it at the start
    ingredientItems.forEach((li) => {
        // Make a checkbox input
        const box = document.createElement("input");
        box.type = "checkbox";
        box.className = "ingredient-check"; // used for counting & styling

        // Put checkbox before the text inside the <li>
        li.insertBefore(box, li.firstChild);
        // Add a little space between the checkbox and the text
        li.insertBefore(document.createTextNode(" "), box.nextSibling);
    });

    // This <span> shows "Checked: X"
    const counterEl = document.getElementById("checked-count");

    // Count how many checkboxes are checked and update the UI
    function updateCounter() {
        const checked = ingredientsList.querySelectorAll(".ingredient-check:checked").length;
        counterEl.textContent = "Checked: " + checked;
    }

    // When a checkbox changes, toggle a class on the parent <li> and recount
    ingredientsList.addEventListener("change", function (e) {
        if (e.target.classList.contains("ingredient-check")) {
            const li = e.target.closest("li");
            if (e.target.checked) {
                // .checked class adds a strikethrough via CSS
                li.classList.add("checked");
            } else {
                li.classList.remove("checked");
            }
            updateCounter();
        }
    });

    // Initialize the counter on page load
    updateCounter();

    // =============================
    // ADD NOTE AREA ON BUTTON CLICK
    // =============================

    // The "Add Note" button and the toolbar container
    const addNoteBtn = document.getElementById("add-note-btn");
    const actions = document.getElementById("actions");

    // Prevent creating multiple note areas
    let noteCreated = false;

    // Create a <label> + <textarea> just below the toolbar when clicked
    addNoteBtn.addEventListener("click", function () {
        if (noteCreated) return;
        noteCreated = true;

        // Wrapper div to hold the label and textarea
        const noteWrap = document.createElement("div");
        noteWrap.id = "note-wrap";
        noteWrap.style.margin = "10px 0";

        // Label for accessibility (ties to the textarea by "for"/"id")
        const label = document.createElement("label");
        label.textContent = "Notes:";
        label.setAttribute("for", "notes-area");
        label.style.display = "block";

        // The notes textarea
        const textarea = document.createElement("textarea");
        textarea.id = "notes-area";
        textarea.rows = 4;
        textarea.style.width = "100%";

        // Build and insert after the toolbar
        noteWrap.appendChild(label);
        noteWrap.appendChild(textarea);
        actions.insertAdjacentElement("afterend", noteWrap);
    });

    // ======================================
    // CLEAR ALL CHECKBOXES WITH ONE CLICK
    // ======================================

    const clearBtn = document.getElementById("clear-checks-btn");
    clearBtn.addEventListener("click", function () {
        // Find all ingredient checkboxes
        const boxes = ingredientsList.querySelectorAll(".ingredient-check");

        // For each, uncheck and remove the strikethrough class
        boxes.forEach((b) => {
            b.checked = false;
            const li = b.closest("li");
            if (li) {
                li.classList.remove("checked");
            }
        });

        // Reset the counter to zero
        updateCounter();
    });

    // ============================================
    // KEYBOARD ACCESSIBILITY FOR INGREDIENT ITEMS
    // ============================================

    // Make each <li> focusable and allow pressing Enter to toggle the checkbox
    ingredientItems.forEach((li) => {
        li.tabIndex = 0; // allows keyboard focus
        li.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                const box = li.querySelector(".ingredient-check");
                if (box) {
                    // Flip the checked state
                    box.checked = !box.checked;
                    // Trigger the same behavior as a real change event
                    const event = new Event("change", { bubbles: true });
                    box.dispatchEvent(event);
                }
            }
        });
    });

    // ===================================
    // SHOW / HIDE THE INSTRUCTIONS LIST
    // ===================================

    // Grab the ordered list of steps and the toggle button
    const instructionsList = document.getElementById("instructions-list");
    const toggleBtn = document.getElementById("toggle-instructions-btn");

    // Clicking the button hides or shows the list and changes button text
    toggleBtn.addEventListener("click", function () {
        if (instructionsList.style.display === "none") {
            // Show the list
            instructionsList.style.display = "block";
            toggleBtn.textContent = "Hide Instructions";
        } else {
            // Hide the list
            instructionsList.style.display = "none";
            toggleBtn.textContent = "Show Instructions";
        }
    });
});
