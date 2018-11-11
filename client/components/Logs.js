import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeLog, fetchLogs } from '../store/logs'

export class Logs extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div id="logBox" className="ui floating message">
                {this.props.logs.map(str => {
                    return <div><i className="window close outline icon" onClick={() => this.props.removeLog(str)}></i>{str.phrase}</div>
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    logs: state.logs
})

const mapDispatchToProps = dispatch => ({
    removeLog: str => dispatch(removeLog(str))
})

export default connect (mapStateToProps, mapDispatchToProps)(Logs)