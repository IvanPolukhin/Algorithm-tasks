const employees = [
    {name: "Alice", department: "HR"},
    {name: "Bob", department: "Engineering"},
    {name: "Charlie", department: "HR"},
    {name: "Diana", department: "Engineering"},
    {name: "Eve", department: "Marketing"},
];

const groupByDepartment = (employees) => {
    return employees.reduce((acc, employee) => {
        const {name, department} = employee;

        if (!acc[department]) {
            acc[department] = [];
        }

        acc[department].push(name);

        return acc;
    }, {});
};

console.log(groupByDepartment(employees));
// {
//     HR: [ 'Alice', 'Charlie' ],
//     Engineering: [ 'Bob', 'Diana' ],
//     Marketing: [ 'Eve' ]
// }
