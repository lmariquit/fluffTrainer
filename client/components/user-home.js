import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SpeechConvertBox from './SpeechConvertBox'
import Timer from './Timer'
import Logs from './Logs'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const email = props.email || 'unknown user'

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <div id="centeredContainer">
        <div id="sideBySide">
          <Timer /> 
          {/* <button>BEGIN</button> */}
        </div>
        <SpeechConvertBox />
        <Logs />
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    logs: state.logs
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
