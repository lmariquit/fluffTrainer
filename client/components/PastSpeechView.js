import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchLogs } from '../store/logs'

class PastSpeechView extends Component {
  constructor () {
    super()

  }

  componentDidMount () {
    this.props.fetchLogs()
  }

  render () {
    return (
      <Fragment>
        <div class="ui placeholder segment">
          <div class="ui icon header">
            <i class="pdf file outline icon"></i>
            No documents are listed for this customer.
          </div>
        </div>

        <div class="ui info message">
          <div class="header">
            Was this what you wanted?
          </div>
          <ul class="list">
            <div>It's good to see you again.</div>
          </ul>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  logs: state.logs
})

const mapDispatchToProps = dispatch => ({
  fetchLogs: () => dispatch(fetchLogs())
})

export default connect(mapStateToProps, mapDispatchToProps)(PastSpeechView)