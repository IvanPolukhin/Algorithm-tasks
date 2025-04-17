const numbers = [1, 2, 3, 4, 5, 6];

const getEvenSquares = (numbers) => {
    return numbers.reduce((acc, number) => {
        if (number % 2 === 0) {
            acc.push(number);
        }

        return acc;
    }, []);
};

console.log(getEvenSquares(numbers));
