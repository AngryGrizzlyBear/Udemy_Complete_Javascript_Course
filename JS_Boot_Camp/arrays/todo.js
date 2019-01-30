// Create an array with five different todos
// You have x todos.
// print the first and second to last items -> Todo: Walk the dog

const todo = ['Walk the dog', 'Go to the store', 'Buy Lunch', 'See your Boss', 'Sleep'];
// console.log(`You have ${todo.length} things to do.`);
// console.log(`Todo: ${todo[0]} and ${todo[todo.length -2]}`);

// Delete the 3rd item
// add a new item on the end.
// Remove the first item from the list.
todo.splice(2, 1);
// You can also push to add something to the end. Splice works too.
todo.splice(4, 0, 'Say Hi to co-workers');
// Shift also gets rid of the first one. Splice or shift works.
todo.splice(0, 1);

//1. The first item
//2. The second item
todo.forEach( function (item, index) {
    const num = index + 1;
    console.log(`${num}. ${item}`)
});

