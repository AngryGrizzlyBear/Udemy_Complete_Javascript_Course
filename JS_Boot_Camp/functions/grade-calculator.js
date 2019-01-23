// Takes two arguments, students score, total possible score.
// 15/20 -> You got a C ()!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let totalScore = function (studentScore, totalPossibleScore) {
    let grade = (studentScore / totalPossibleScore) * 100;
    if (grade >= 90) {
        console.log(`${studentScore}/${totalPossibleScore}. You got an A!(${grade}%)`)
    } else if (89 >= grade && grade >= 80) {
        console.log(`${studentScore}/${totalPossibleScore}. You got a B!(${grade}%)`)
    }else if (79 >= grade && grade >= 70) {
        console.log(`${studentScore}/${totalPossibleScore}. You got a C!(${grade}%)`)
    } else if (69 >= grade && grade >= 60) {
        console.log(`${studentScore}/${totalPossibleScore}. You got a D.(${grade}%)`)
    } else if (grade < 60) {
            console.log(`${studentScore}/${totalPossibleScore}. Sorry. You've received an F(${grade}%). Please report this to your parents.`);
    } else {
        console.log('Please enter in numbers.')
    }
    return grade
};

totalScore(19, 20);
totalScore(10, 20);

// Teacher's notes.

let gradeCalc = function(score, totalScore) {
    let percent = (score / totalScore) * 100
    let letterGrade = ''

    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${percent}%)`
};

let result = gradeCalc(15, 20)
console.log(result);

// This is the cleaner version. Keep going, good job.