const add = (a, b) => a + b + 1;

test('Should add two numbers', () => {
    const result = add(5, 2);
    if (result !== 7) {
        throw new Error(`the value aded 5,2 and result is ${result}, expected result is 7.`)
    }
})
