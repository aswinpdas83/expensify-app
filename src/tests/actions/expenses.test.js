import { addExpense, editExpense, removeExpense } from '../../actions/expenses'


// Add expense with value provided
test('Should setup add expense action object with provided values', () => {
    const expenseData = {
        description: "Rent",
        amount: 109500,
        createdAt: 1000,
        note: "This was last month rent"
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

// Add expense with default values
test('Should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: "",
            amount: 0,
            createdAt: 0,
            note: ""
        }
    })
})

// Edit expense
test('Should setup edit expense action object', () => {
    const action = editExpense('123-abc', { note: "new note" });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123-abc',
        updates: {
            note: "new note"
        }
    })
})

// Remove expense
test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123-abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123-abc'
    })
})
