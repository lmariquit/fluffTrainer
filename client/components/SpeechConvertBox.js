import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { addLog } from '../store/logs'

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const speechRecognizer = new SpeechRecognition()
let finalTranscripts = ''

export class SpeechConvertBox extends Component {
    constructor() {
        super()
        this.state = ({
            speech: ''
        })
        this.startConverting = this.startConverting.bind(this)
        this.transcribe = this.transcribe.bind(this)
    }

    transcribe(event) {
        let interimTranscripts = '\n'
        for (let i = event.resultIndex; i < event.results.length; i++) {
            let transcript = event.results[i][0].transcript
            transcript.replace("\n", "<br>")
            if (event.results[i].isFinal) {
                finalTranscripts += transcript
            } else {
                interimTranscripts += transcript
            }
        }
        this.setState({
            speech: `${finalTranscripts + interimTranscripts}`
        })
    }

    startConverting() {
        speechRecognizer.continuous = true
        speechRecognizer.interimResults = true
        speechRecognizer.lang = 'en-IN'
        speechRecognizer.start()

        speechRecognizer.onresult = this.transcribe

        setTimeout(() => {
            console.log('resetting')
            finalTranscripts = ''
            speechRecognizer.stop()
            this.state.speech.includes('like') && this.props.addLog(this.state.speech)
            this.setState({
                speech: ''
            })
            setTimeout(() => this.startConverting(), 700)
        }, 5000)
    }

    render() {
        console.log('state.speech: ', this.state.speech)
        if(this.props.timer) {
            console.log('in here')
            this.startConverting()
        }
        return (
            <Fragment>
                <div id="width" className="ui floating message">
                    <div className="text-box" contentEditable="true" suppressContentEditableWarning={true}>{this.state.speech}</div>
                    <button onClick={this.startConverting} className="ui button"><i className="fa fa-microphone"></i></button>
                </div>
                {/* <audio className="sound" src="beep.mp3"></audio> */}                
            </Fragment>
        )
    }

}

const mapStateToProps = state => ({
    timer: state.timer
})

const mapDispatchToProps = dispatch => ({
    addLog: str => dispatch(addLog(str))
})

export default connect(mapStateToProps, mapDispatchToProps)(SpeechConvertBox)