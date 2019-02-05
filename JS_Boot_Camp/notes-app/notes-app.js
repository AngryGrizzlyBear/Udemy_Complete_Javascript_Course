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

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked.'
});

document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function(note){
        note.remove()
    })
});


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