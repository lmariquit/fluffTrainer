import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeLog, initializeLogs } from '../store/logs'

export class Logs extends Component {
    constructor (props) {
        super(props)
        this.boldLikes = this.boldLikes.bind(this)
    }

    componentDidMount() {
        this.props.initializeLogs()
    }

    boldLikes (phrase) {
        return phrase.replace(/like/g, 'LIKE').replace(/I mean/g, 'I MEAN').replace(/you know/g, 'YOU KNOW')
    }

    render() {
        return (
            <div id="logBox" className="ui floating message">
                {this.props.logs.map(obj => {
                    return <div><i className="window close outline icon" onClick={() => this.props.removeLog(obj.id)}></i>{this.boldLikes(obj.phrase)}</div>
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    logs: state.logs
})

const mapDispatchToProps = dispatch => ({
    removeLog: obj => dispatch(removeLog(obj)),
    initializeLogs: () => dispatch(initializeLogs())
})

export default connect (mapStateToProps, mapDispatchToProps)(Logs)