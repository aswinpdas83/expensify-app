import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from "../../actions/filters"
import moment from 'moment'


// Set Start date
test('Should generate set Start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

// Set End date
test('Should generate set End date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

// Sort by Date
test('Should sort by date action object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    })
})

// Sort by amount
test('Should sort by amount action object', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    })
})

// Set text filter
test('Should generate set text filter action object with text value', () => {
    const action = setTextFilter("test")
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: "test"
    })
})

test('Should generate set text filter action object with no value', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ""
    })
})