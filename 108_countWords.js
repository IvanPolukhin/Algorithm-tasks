const wordList = ["apple", "banana", "apple", "orange", "apple", "banana"];

const countWords = (words, target) => {
    return words.reduce((acc, word) => {
        return acc + (word === target ? 1 : 0);
    }, 0);
};

console.log(countWords(wordList, "apple"));
