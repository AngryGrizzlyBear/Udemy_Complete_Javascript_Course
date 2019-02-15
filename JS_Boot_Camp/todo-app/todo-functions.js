
// 1. Fetch existing todos from localStorage
// getSaveTodos
const getSavedTodos = function () {

    const todosJSON = localStorage.getItem('todos');

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
};

// 2. Save todos to localStorage
// saveTodos

const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
};

// 3. Render application todos based on filters
// renderTodos
const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    });

    filteredTodos = filteredTodos.filter(function (todo) {
        // two ways to do this

        return !filters.hideCompleted || !todo.completed

        // if (filters.hideCompleted) {
        //    return !todo.completed
        // } else {
        //     return true
        // }
    });

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    });

    document.querySelector('#todos').innerHTML = '';
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    });
};

// 4. Get the DOM elements for an individual note
// generate TodoDOM
const generateTodoDOM = function (todo) {
    const p = document.createElement('p');
    p.textContent = todo.text;
    return p
};

// 5. Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    return summary
};
// generateSummaryDOM