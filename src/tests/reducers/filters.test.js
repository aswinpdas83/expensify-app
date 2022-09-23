import filtersReducer from "../../reducers/filters";
import moment from 'moment';


test('Should setup default filters values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('Should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' })
    expect(state.sortBy).toBe('date')
});

test('Should set text filter', () => {
    const text = "text filter";
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe('text filter')
});

test('Should set startDate filter', () => {
    const startDate = moment().startOf('month');
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(moment().startOf('month'))// or we can use 'moment()' with out 'moment().startOf('month')
});

test('Should set endDate filter', () => {
    const endDate = moment().endOf('month');
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(moment().endOf('month')) // or we can use 'moment()' with out 'moment().endOf('month')
});



