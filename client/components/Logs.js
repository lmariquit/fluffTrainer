import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeLog } from '../store/logs'

export class Logs extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        console.log('the objarr: ',this.props.logs)
        return (
            <div id="logBox" className="ui floating message">
                {this.props.logs.map(obj => {
                    return <div><i className="window close outline icon" onClick={() => this.props.removeLog(obj.id)}></i>{obj.phrase}</div>
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    logs: state.logs
})

const mapDispatchToProps = dispatch => ({
    removeLog: obj => dispatch(removeLog(obj))
})

export default connect (mapStateToProps, mapDispatchToProps)(Logs)