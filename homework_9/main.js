

class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
        this.dismiss = false;
    }

    getInfo() {
        return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`;
    }

    get getMarks() {
        return !this.dismiss ? this.marks : null;
        
    }

    set setMarks(mark) {
        !this.dismiss ? this.marks.push(mark) : this.marks = null;
    }

    getAverageMark() {
        if (this.marks === null) {
            return 0;
        }
        return this.marks.reduce((sum, value) => sum + value) / this.marks.length;
    }

    dismiss () {
        return this.dismiss = true;
    }
    recover () {
        return this.dismiss = false;
    }
};



const katya = new Student ('КПІ', 3, 'Катерина Тарасенко');

console.log(katya.getInfo());


katya.setMarks = 5;
console.log(katya.getMarks);
console.log(`Cередня оцінка: ${katya.getAverageMark()}`);



class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        setInterval(() => this.getScholarship(), 30000);
    }
    getScholarship () {
        if (this.getAverageMark() >= 4) {
            console.log(`Ви отримали 1400 грн. стипендії`);
        }
    }
}

const tanya = new BudgetStudent("КЕИ КНЕУ", 2, "Шевченко Тетяна");

console.log(tanya.getScholarship());