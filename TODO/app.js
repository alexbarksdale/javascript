const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = (todo) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <button class="delete">x</button>
        </li>
    `;

    list.innerHTML += html;
};

// Add todos
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const TODO = addForm.add.value.trim();
    if (TODO.length) {
        generateTemplate(TODO);
        addForm.reset();
    }
});

// Delete todos
list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todoItem) => !todoItem.textContent.includes(term))
        .forEach((todoItem) => todoItem.classList.add('filtered'));

    Array.from(list.children)
        .filter((todoItem) => todoItem.textContent.includes(term))
        .forEach((todoItem) => todoItem.classList.remove('filtered'));
};

// Search todos
search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterTodos(term);
});
