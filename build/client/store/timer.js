//action types
const TOGGLE_TIMER = 'TOGGLE_TIMER'

//action creators
export const toggleTimer = () => ({
    type: TOGGLE_TIMER,
})

//thunk action creators

//reducer
export default function (prevState = false, action) {
    switch (action.type) {
        case TOGGLE_TIMER:
            return !prevState
        default:
            return prevState
    }
}