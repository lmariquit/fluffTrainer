import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeLog } from '../store/logs'

export class Logs extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.logs.map(str => {
                    return <div><span onClick={() => this.props.removeLog(str)}>x   </span>{str}</div>
                })}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    removeLog: str => dispatch(removeLog(str))
})

export default connect (null, mapDispatchToProps)(Logs)