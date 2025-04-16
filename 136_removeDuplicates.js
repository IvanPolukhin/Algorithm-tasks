const numbers = [4, 7, 1, 9, 2, 7, 4, 1, 9];

const removeDuplicates = (numbers) => {
    const removed = [...new Set(numbers)];

    return removed.sort((a, b) => a - b);
}

console.log(removeDuplicates(numbers));
