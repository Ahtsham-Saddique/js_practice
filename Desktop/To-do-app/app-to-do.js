let add_btn = document.querySelector('#add-btn');

let input = document.querySelector("#input-text");
let item = document.querySelector("#item");

add_btn.addEventListener("click", () => {
    if (input.value !== "") {
        item.innerHTML += `
        <div class="todo-item">
            <h1 class="itm">${input.value}</h1>
            <div class="todo-buttons">
                <button class="update-btn" type="submit">Update</button>
                <button class="delete-btn" type="submit">Delete</button>
            </div>
        </div>
        `;
        input.value = "";
    }
});

// Event delegation for delete and update buttons
item.addEventListener("click", function(e) {
    // Delete functionality
    if (e.target.classList.contains("delete-btn")) {
        e.target.closest(".todo-item").remove();
    }

    // Update functionality
    if (e.target.classList.contains("update-btn")) {
        const todoItem = e.target.closest(".todo-item");
        const textElement = todoItem.querySelector(".itm");
        const currentText = textElement.textContent;
        
        const newText = prompt("Enter new text:", currentText);
        if (newText !== null && newText.trim() !== "") {
            textElement.textContent = newText.trim();
        }
    }
});
