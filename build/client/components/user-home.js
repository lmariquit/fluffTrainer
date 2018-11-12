import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SpeechConvertBox from './SpeechConvertBox'
import Logs from './Logs'
import { toggleTimer } from '../store/timer'

/**
 * COMPONENT
 */
export class UserHome extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    const email = this.props.email || 'unknown user'

    return (
      <div id="background">
        <h3>Welcome, {email}</h3>
        <div id="centeredContainer">
          <SpeechConvertBox/>
          <Logs />
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    logs: state.logs,
    timer: state.timer
  }
}

const mapDispatch = dispatch => ({
  toggleTimer: () => dispatch(toggleTimer())
})

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
