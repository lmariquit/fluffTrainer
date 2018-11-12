import axios from 'axios'

//action types
const INITIALIZE_LOGS = 'INITIALIZE_LOGS'
const GET_LOGS = 'GET_LOGS'
const ADD_LOG = 'ADD_LOG'
const REMOVE_LOG = 'REMOVE_LOG'


//action creators
const addedLog = log => ({
    type: ADD_LOG,
    payload: log
})

const removedLog = id => ({
    type: REMOVE_LOG,
    payload: id
})

const getLogs = logs => ({
    type: GET_LOGS,
    payload: logs
})

export const initializeLogs = () => ({
    type: INITIALIZE_LOGS
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

export const removeLog = id => async dispatch => {
    try {
        console.log('obj', id)
        console.log('the id', id)

        const { data } = await axios.delete('/api/logs/remove/' + id)
        console.log('thedtata:', data)
        dispatch(removedLog(id))
    } catch(err) {
        console.log('REMOVE DIDNT WORK')
        console.error(err)
    }
}

export const fetchLogs = () => async dispatch => {
    try { 
        const {data} = await axios.get('api/logs')
        const action = getLogs(data)
        dispatch(action)
    } catch(err) {
        console.error(err)
    }
}

//reducer
export default function (prevState = [], action) {
    switch (action.type) {
        case INITIALIZE_LOGS:
            return []
        case GET_LOGS:
            return [...action.payload]
        case ADD_LOG:
            return [...prevState, action.payload]
        case REMOVE_LOG:
            return prevState.filter(obj => obj.id !== action.payload)
        default:
            return prevState
    }
}