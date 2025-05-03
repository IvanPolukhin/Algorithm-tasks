const createPasswordValidator = (minLength, forbiddenWords) => {
    const initForbidden = [...forbiddenWords];
    let currentForbidden = [...forbiddenWords];

    return {
        validate: (password) => {
            if (password.length < minLength) return false;

            const lowerPass = password.toLowerCase();

            return !currentForbidden.some((word) =>
                lowerPass.includes(word.toLowerCase()),
            );
        },

        update: (newForbiddenWords) => {
            currentForbidden.push(...newForbiddenWords);
        },

        reset: () => {
            currentForbidden = [...initForbidden];
        },
    };
};
