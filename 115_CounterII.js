const CounterII = (init) => {
    let currVal = init;

    return {
        increment: () => {
            currVal++;
            return currVal;
        },
        decrement: () => {
            currVal--;
            return currVal;
        },
        reset: () => {
            currVal = init;
            return currVal;
        },
    };
};

const counter = CounterII(10);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
