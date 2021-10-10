const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


const girls = students.filter(student => student.slice(-1) === "а");

const boys = students.filter(student => !girls.includes(student));

const pairs = [];
for (let i = 0; i < girls.length; i++) {
    pairs[i] = [girls[i], boys[i]];
}

const pairsCommon = [];
for (let i = 0; i < girls.length; i++) {
    pairsCommon[i] = [girls[i] + ` і ` + boys[i]];
}

const themesForPairs = [];
for (let j = 0; j < pairsCommon.length; j++) {
    themesForPairs[j] = [pairsCommon[j] + `, ` + themes[j]];
}

const studentsMarks = [];
for (let k = 0; k < students.length &&  marks.length; k++) {
    studentsMarks[k] = [students[k], marks[k]];
}

const marksRandom = [];
for (let  t = 0; t < 5; t++) {
    marksRandom.push(Math.round(Math.random() * t + 1));
}

const themesForPairsRandoMarks = [];
for (let i = 0; i < themesForPairs.length && i < marksRandom.length; i++) {
    themesForPairsRandoMarks[i] = [themesForPairs[i] + `, ` + marksRandom[i]];
}

console.log(pairs);
console.log(themesForPairs);
console.log(studentsMarks);
console.log(themesForPairsRandoMarks);