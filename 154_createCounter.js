const createCounter = (number) => {
    let initVal = number;
    let currVal = number;

    return {
        increment: () => ++currVal,
        decrement: () => --currVal,
        reset: () => (currVal = initVal),
    };
};

const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
