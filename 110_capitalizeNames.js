function capitalizeNames(names) {
    return names.reduce((acc, name) => {
        const capitalizedName =
            name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        acc.push(capitalizedName);
        return acc;
    }, []);
}

console.log(capitalizeNames(["ivan", "roma", "yarik"]));
