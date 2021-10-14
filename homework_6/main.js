const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
}];
  
// 1
const  getSubjects = (student) => {
    const subjectsArr =[];

    for (const key in student.subjects) {
        let subject = key.charAt(0).toUpperCase() + key.slice(1);
        subject = subject.split('_').join('-');
        subjectsArr.push(subject);

    }
    return subjectsArr;
}

console.log(getSubjects(students[1]));



// 2
const getAverageMark = (student) => {
    const marksArr = [];
    let averageMark;

    for (const key in student.subjects) {
        marksArr.push(...student.subjects[key]);
        averageMark = marksArr.reduce((a, b) => (a + b)) / marksArr.length;
    }
    return averageMark.toFixed(2);
}

console.log(getAverageMark(students[0]));


// 3
const getStudentInfo = (student) => {
    return {
        course: student.course,
        name: student.name,
        averageMark: getAverageMark(student)
    }
}
console.log(getStudentInfo(students[2]));


// 4
const getStudentsNames = (students) => students.map((student) => student.name).sort();

console.log(getStudentsNames(students));


// 5
const getBestStudent = (students) => students.reduce((prev, current) => getAverageMark(prev) > getAverageMark(current) ? prev : current).name;

console.log(getBestStudent(students));



// 6
const calculateWordLetters = (word) => {
    const objLetters = {};
    word.split('').forEach(item => {
        objLetters[item] = (objLetters[item] || 0) + 1;
    });
    return objLetters;
}

console.log(calculateWordLetters("тест"));