function largest_prime_factor(number) {

    const dividers = [];
    for (let i = 1; i < number; i += 1) {
        if (number % i === 0) {
            dividers.push(i)
        }
    }

    const primeDividers = dividers.filter((divider) => {
        let counter = 0;
        for (let i = 1; i < divider; i += 1) {
            if (divider % i === 0) {
                counter += 1;
            }
        }
        return counter < 2;
    })

    return primeDividers[primeDividers.length - 1]
}