const multiplicationTable = (nums) => {
    nums.forEach((num) => {
        console.log(`multiplication table for ${num}`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${i} * ${num} = ${i * num}`);
        }
        console.log("");
    });
};

multiplicationTable([1, 2, 3]);
