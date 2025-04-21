const words = ["apple", "banana", "kiwi", "grapefruit", "pear"];

const sortedWords = (words) => {
    return words.sort((a, b) => a.length - b.length);
};

console.log(sortedWords(words)); // [ 'kiwi', 'pear', 'apple', 'banana', 'grapefruit' ]
