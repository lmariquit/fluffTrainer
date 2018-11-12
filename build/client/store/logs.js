//action types
const ADD_LOG = 'ADD_LOG'
const REMOVE_LOG = 'REMOVE_LOG'


//action creators
export const addLog = log => ({
    type: ADD_LOG,
    payload: log
})

export const removeLog = log => ({
    type: REMOVE_LOG,
    payload: log
})
//thunk action creators

//reducer
export default function (prevState = [], action) {
    switch (action.type) {
        case ADD_LOG:
            return [...prevState, action.payload]
        case REMOVE_LOG:
            return prevState.filter(str => str !== action.payload)
        default:
            return prevState
    }
}