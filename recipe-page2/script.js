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


}

