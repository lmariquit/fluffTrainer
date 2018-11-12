import React, { Component, Fragment } from 'react'
import { fetchLogs, removeLog } from '../store/logs'
import { connect } from 'react-redux'

const mapObj = {}

class PastSpeechList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchLogs()
    }

    render() {
        this.props.logs.length && this.props.logs.forEach(obj => {
            if (mapObj[obj.speechTime]) {
                mapObj[obj.speechTime].likeCount += obj.likeCount
                mapObj[obj.speechTime].phrases.push(obj.phrase)
            } else {
                mapObj[obj.speechTime] = {
                    likeCount: obj.likeCount,
                    phrases: [obj.phrase]
                }
            }
        })
        const newArr = Object.entries(mapObj)
        const totalLikes = newArr.reduce((acc, elem) => {
            return  acc + elem[1].likeCount
        }, 0)

        return (
            <Fragment>
                <div id="titleRecordings">Your Past Recordings</div>
                <div id="totalLikesContainer">
                    <div id="totalLikes"> Total "LIKE" usage</div>
                    <div id="allLikesNumber">{totalLikes}</div>
                </div>
                <div>
                    <div className="ui divided selection list">
                        {newArr.map(arr => {
                            return (
                                <div id="listOfSessions" className="item">
                                    <div className="ui circular label" id="likeNumber">{arr[1].likeCount}</div>
                                    <div className="content">
                                        <div className="header">{arr[0]}</div>
                                        {arr[1].phrases.map(phrase => <div><i className="angle right icon"></i>{phrase}</div>)}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    logs: state.logs
})

const mapDispatchToProps = dispatch => ({
    fetchLogs: () => dispatch(fetchLogs()),
    removeLog: obj => dispatch(removeLog(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(PastSpeechList)