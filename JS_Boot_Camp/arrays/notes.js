const notestwo = [ {
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    });
    // const note = notes.find(function (note, index) {
    //     return note.title.toLowerCase() === noteTitle.toLowerCase();
    // });
    //return note
};

const findNotes = function (notes, query) {
    return notestwo.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch || isBodyMatch
    });
};


console.log(findNotes(notestwo, 'work'));

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     });
//     return notes[index]
// };

const note = findNote(notestwo, 'Office modification');
console.log(note);

// console.log(notestwo.length);
// console.log(notestwo);

// // MDN findIndex()
// const index = notestwo.findIndex(function (note, index) {
//     console.log(note);
//     return note.title === 'Habbits to work on'
// });
// console.log(index);

// const notes = ['Note 1', 'Note 2', 'Note 3'];

// MDN array
//
// console.log(notes.pop());
// notes.push('My new note.');
//
// console.log(notes.shift());
// notes.unshift('My First Note');

// notes.splice(1, 1, 'This is the new second item');

// notes[2] = 'This is now the new note 3.';

// callback function
// Also a loop
// notes.forEach(function (item, index) {
//    console.log(index);
//     console.log(item);
// });
//
// console.log(notes.length);
// console.log(notes);

// Counting... 1
// for (let count = 2; count >= 0; count--) {
//     console.log(count)
// };
//
// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count])
// }
//
// for (let count = notes.length - 1; count >= 0; count--){
//     console.log(notes[count])
// };
//
// console.log(notes.indexOf('Note 2'));

