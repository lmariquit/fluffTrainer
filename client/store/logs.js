import axios from 'axios'

//action types
const ADD_LOG = 'ADD_LOG'
const REMOVE_LOG = 'REMOVE_LOG'
const GET_LOGS = 'GET_LOGS'


//action creators
const addedLog = log => ({
    type: ADD_LOG,
    payload: log
})

const removedLog = log => ({
    type: REMOVE_LOG,
    payload: log
})

const getLogs = logs => ({
    type: GET_LOGS,
    payload: logs
})

//thunk action creators
export const addLog = obj => async dispatch => {
    try {
        const { data } = await axios.post('/api/logs', obj)
        const action = addedLog(data)
        dispatch(action)
    } catch(err) {
        console.log('ADD DIDNT WORK')
        console.error(err)
    }
}

export const removeLog = str => async dispatch => {
    try {
        await axios.delete('/', { phrase: str })
        const action = removedLog(str)
        dispatch(action)
    } catch(err) {
        console.log('REMOVE DIDNT WORK')
        console.error(err)
    }
}

export const fetchLogs = () => async dispatch => {
    console.log(' WE MADE IT HERE')
    try { 
        const {data} = await axios.get('api/logs')
        console.log('data: ', data)
        const action = getLogs(data)
        console.log('the ation:', action)
        dispatch(action)
    } catch(err) {
        console.error(err)
    }
}

//reducer
export default function (prevState = [], action) {
    switch (action.type) {
        case GET_LOGS:
        console.log(action.payload)
            return [...action.payload]
        case ADD_LOG:
            return [...prevState, action.payload]
        case REMOVE_LOG:
            return prevState.filter(str => str !== action.payload)
        default:
            return prevState
    }
}