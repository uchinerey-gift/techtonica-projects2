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


