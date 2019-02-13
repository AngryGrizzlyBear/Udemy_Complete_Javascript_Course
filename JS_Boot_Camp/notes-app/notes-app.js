// DOM-Document Object Model
const notes = [ {
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];

const filters = {
  searchText: ''
};

// const user = {
//   name: 'Andrew',
//   age: 27
// };
//
// const userJSON = JSON.stringify(user);
// console.log(userJSON);
// localStorage.setItem('user', userJSON);

const userJSON = localStorage.getItem('user');
const user = JSON.parse(userJSON);
console.log(`${user.name} is ${user.age}`); // Local storage.

// localStorage.setItem('location', 'Philadelphia')
// console.log(localStorage.getItem('location'));

// localStorage.removeItem('location');

// localStorage.clear();

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLocaleLowerCase())
    });

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
        document.querySelector('#notes').appendChild(noteEl)
    })
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked.'
});

// document.querySelector('#remove-all').addEventListener('click', function () {
//     document.querySelectorAll('.note').forEach(function(note){
//         note.remove()
//     })
// });

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters)
});

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
});
// document.querySelector('#for-fun').addEventListener('change', function (e) {
//    console.log(e.target.checked)
// });

// document.querySelector('#name-form').addEventListener('submit', function (e) {
//   e.preventDefault();
//   //preventDefault prevents refresh behavior
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = '';
// });


// -- Single --
// p
// #replace
// .item

// -- Multiple --
//p#order
// button.inventory
//h1#title.application
//h1.application#title
























// Query and remove
// const p = document.querySelector('p');
// p.remove();

// const ps = document.querySelectorAll('p');
//
// ps.forEach(function (p) {
//     p.textContent = '********'
//     // console.log(p.textContent)
//     // p.remove()
// });
//
// // Add a new element
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a new element from Javascript';
// document.querySelector('body').appendChild(newParagraph);