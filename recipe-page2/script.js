document.addEventListener("DOMContentLoaded", function () {
    console.log("Recipe DOM ready");
});

const ingredientsList = document.getElementById("ingredients-list");
const ingredientItems = ingredientsList ? ingredientsList.querySelectorAll("li") : [];
 ingredientItems.forEach((li) => {
    const box = document.createElement("input");
    box.type = "checkbox";
    box.className = "ingredient-check";

    li.insertBefore(box, li.firstChild);
    li.insertBefore(document.createTextNode(" "), box.nextSibling);
});


const counterEl = document.getElementById("checked-count");
function updateCounter() {
    const checked = ingredientsList.querySelectorAll(".ingredient-check:checked").length;
    counterEl.textContent = "Checked: " + checked;
}

ingredientsList.addEventListener("change", function (e) {
    if (e.target.classList.contains("ingredient-check")) {
        const li = e.target.closest("li");
        if (e.target.checked) {
            li.classList.add("checked");
        } else {
            li.classList.remove("checked");
        }
        updateCounter();
    }
});

updateCounter();

const addNoteBtn = document.getElementById("add-note-btn");
const actions = document.getElementById("actions");
let noteCreated = false;

addNoteBtn.addEventListener("click", function () {
    if (noteCreated) return;
    noteCreated = true;

    const noteWrap = document.createElement("div");
    noteWrap.id = "note-wrap";
    noteWrap.style.margin = "10px 0";

    const label = document.createElement("label");
    label.textContent = "Notes:";
    label.setAttribute("for", "notes-area");
    label.style.display = "block";

    const textarea = document.createElement("textarea");
    textarea.id = "notes-area";
    textarea.rows = 4;
    textarea.style.width = "100%";

    noteWrap.appendChild(label);
    noteWrap.appendChild(textarea);
    actions.insertAdjacentElement("afterend", noteWrap);
});
const clearBtn = document.getElementById("clear-checks-btn");
clearBtn.addEventListener("click", function () {
    const boxes = ingredientsList.querySelectorAll(".ingredient-check");
    boxes.forEach((b) => {
        b.checked = false;
        const li = b.closest("li");
        li && li.classList.remove("checked");
    });
    updateCounter();
});




