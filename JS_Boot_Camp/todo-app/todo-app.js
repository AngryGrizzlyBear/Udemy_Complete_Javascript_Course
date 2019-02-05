const todos = [{
    text: 'Walk the Dog',
    completed: false,
}, {
    text: 'Buy food',
    completed: false
}, {
    text: 'Watch TV',
    completed: true,
}, {
    text: 'Hug Wife',
    completed: true,
}, {
    text: 'Call Dad',
    completed: true,
}];

const filters = {
    searchText: ''
};

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    });
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    });

    document.querySelector('#todos').innerHTML = '';

    const summary = document.createElement('h2');

    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    document.querySelector('#todos').appendChild(summary);

    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p');
        p.textContent = todo.text;
        document.querySelector('#todos').appendChild(p)
    });
};
// Starts

// ends

renderTodos(todos, filters);
// Listen for new todos creation

document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('The button was clicked!')
});

// Listen for to-do text change
document.querySelector('#new-todo-text').addEventListener('input', function (e) {
    console.log(e.target.value)
});

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters)
});


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