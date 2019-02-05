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

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
});

const summary = document.createElement('h2');

summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('body').appendChild(summary);

todos.forEach(function (todo) {
   const p = document.createElement('p');
   p.textContent = todo.text;
   document.querySelector('body').appendChild(p)
});

// Listen for new todos creation

document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('The button was clicked!')
});



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