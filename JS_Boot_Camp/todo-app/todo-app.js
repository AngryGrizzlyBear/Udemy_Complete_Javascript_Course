let todos = getSavedTodos();

const filters = {
    searchText: '',
    hideCompleted: false
};



// Starts

// ends

renderTodos(todos, filters);
// Listen for new todos creation

// document.querySelector('#add-todo').addEventListener('click', function (e) {
//     console.log('The button was clicked!')
// });

// Listen for to-do text change

// document.querySelector('#new-todo-text').addEventListener('input', function (e) {
//     console.log(e.target.value)
// });

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters)
});

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault();
    todos.push({
        text: e.target.elements.text.value,
        completed: false,
    });
    saveTodos(todos);
    renderTodos(todos, filters);
    e.target.elements.text.value =''
});

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
});



// 1. Create a checkbox and setup event listener -> "Hide completed"
// 2. Create new hideCompleted filter (default false)
// 3. Update hideCompleted an rerender list on checkbox change
// 4. Setup renderTodos to remove completed items.


// 1. Create a form without a single input for todos text.
// 2. Add a new item to the todos array with that text data (complete value of false)
// 3. Add a new item to the todos array with that text data (completed value of false)
// 4. Rerender the application
// 5. Clear the input field value

// Challenge Area
// 1. Setup a div container for todos
// 2. Setup filters (searchText) and wire up a new filter input to change it
// 3. Create a renderTodos function to render and rerender the latest filtered data




// Challenge Area
// You have 2 todos left (p element)
// Add a p for each todos above (use text value)

// const paragraphs = document.querySelectorAll('p');
//
// paragraphs.forEach(function (p) {
//     if(p.textContent.includes('the')) {
//         p.remove()
//     }
//
// });
//
// const todos = [{
//     text: 'Walk the Dog',
//     completed: false,
// }, {
//     text: 'Buy food',
//     completed: false
// }, {
//     text: 'Watch TV',
//     completed: true,
// }, {
//     text: 'Hug Wife',
//     completed: true,
// }, {
//     text: 'Call Dad',
//     completed: true,
// }];