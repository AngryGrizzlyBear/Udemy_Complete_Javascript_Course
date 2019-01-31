// Create an array with five different todos
// You have x todos.
// print the first and second to last items -> Todo: Walk the dog

// const todo = ['Walk the dog', 'Go to the store', 'Buy Lunch', 'See your Boss', 'Sleep'];
// console.log(`You have ${todo.length} things to do.`);
// console.log(`Todo: ${todo[0]} and ${todo[todo.length -2]}`);

// Delete the 3rd item
// add a new item on the end.
// Remove the first item from the list.
// todo.splice(2, 1);
// // You can also push to add something to the end. Splice works too.
// todo.splice(4, 0, 'Say Hi to co-workers');
// // Shift also gets rid of the first one. Splice or shift works.
// todo.splice(0, 1);
//
// //1. The first item
// //2. The second item
// todo.forEach( function (item, index) {
//     const num = index + 1;
//     console.log(`${num}. ${item}`)
// });

// 1. Order cat food
// 2. Clean kitchen.
// ....

// for (let count = 0; count < todo.length; count++) {
//     const num = count + 1;
//     console.log(`${num}. ${todo[count]}`)
// };


// 1. Convert array to array of objects -> text, completed
// 1. Create a function to remove a todo by text value.
const todo = [{
    text: 'Walk the Dog',
    completed: false,
}, {
    text: 'Buy food',
    completed: false
}, {
    text: 'Watch TV',
    completed: false,
}, {
    text: 'Hug Wife',
    completed: true,
}, {
    text: 'Call Dad',
    completed: true,
}
];

const deleteToDo = function (todos, todoText) {
    const index = todos.findIndex(function (todo){
        return todo.text.toLowerCase() === todoText.toLocaleLowerCase()
    });
    if (index > -1) {
        todos.splice(index, 1)
    }
};

// deleteToDo(todo, 'Walk the Dog');
// console.log(todo);

const getThingsToDo = function(todos) {
    return todos.filter(function (todo, index) {
        return !todo.completed // === false
    })
};

console.log(getThingsToDo(todo));