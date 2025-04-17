const grades = {
    Alice: 82,
    Bob: 91,
    Charlie: 77,
    David: 95,
    Eva: 68,
};

const getPassedStudents = (students) => {
    let passedStudents = [];
    const passingScore = 80;

    for (const student in students) {
        if (students[student] > passingScore) {
            passedStudents[student] = students[student];
        }
    }

    return passedStudents;
};

console.log(getPassedStudents(grades));

// Alternative

const getPassedStudents2 = (students) => {
    return Object.entries(students)
        .filter(([_name, score]) => score >= 80)
        .map(([name]) => name);
};

console.log(getPassedStudents2(grades));

const getPassedStudents3 = (students) => {
    return Object.keys(students).filter((name) => students[name] > 80);
};

console.log(getPassedStudents3(grades));

const getPassedStudents4 = (students) => {
    return Object.entries(students).reduce((acc, [name, score]) => {
        if (score >= 80) acc.push(`${name} - ${score}`);

        return acc;
    }, []);
};

console.log(getPassedStudents4(grades));
