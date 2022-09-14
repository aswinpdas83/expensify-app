const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('Should add two numbers', () => {
    const result = add(5, 2);
    expect(result).toBe(7)
});

test('generate greeting from name.', () => {
    const result = generateGreeting('Aswin');
    expect(result).toBe('Hello Aswin!')
});

test('generate greeting for no name.', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!')
});


