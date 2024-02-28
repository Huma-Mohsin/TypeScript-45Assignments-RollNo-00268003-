"use strict";
// //Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let student = "Zimmal";
let student_class = "9th";
let marks_obtained = 352;
let total_marks = 550;
let percentage = ((marks_obtained / total_marks) * 100);
if (percentage >= 80) {
    console.log(`In class ${student_class},you got "A+" grade`);
}
else if (percentage >= 70 && percentage <= 80) {
    console.log(`In class ${student_class},you got "A" grade`);
}
else if (percentage >= 60 && percentage <= 70) {
    console.log(`In class ${student_class},you got "B" grade`);
}
else if (percentage >= 50 && percentage <= 60) {
    console.log(`In class ${student_class},you got "C" grade`);
}
else if (percentage >= 40 && percentage <= 50) {
    console.log(`In class ${student_class},you got "D" grade`);
}
else {
    console.log(`In class ${student_class},you are Failed`);
}
//Author-"HumaMohsin"
//Roll No. 00268003
//Date: 26-02-2024
