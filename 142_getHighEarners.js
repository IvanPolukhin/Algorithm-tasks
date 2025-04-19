const salaries = {
    John: 1000,
    Jane: 1200,
    Mark: 900,
    Lucy: 1300,
};

const getHighEarners = (salaries, minSalary) => {
    return Object.entries(salaries)
        .filter(([_key, value]) => value > minSalary)
        .map(([key]) => key);
};

console.log(getHighEarners(salaries, 1000));
