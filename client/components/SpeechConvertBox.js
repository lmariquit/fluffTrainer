import React, { Component, Fragment } from 'react'
window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const speechRecognizer = new SpeechRecognition()
let finalTranscripts = ''

export default class SpeechConvertBox extends Component {
    constructor() {
        super()
        this.state = ({
            speech: ''
        })
        this.startConverting = this.startConverting.bind(this)
        this.test = this.test.bind(this)
    }

    test(event) {
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

        speechRecognizer.onresult = this.test

        setTimeout(() => {
            console.log('resetting')
            finalTranscripts = ''
            speechRecognizer.stop()
            setTimeout(() => this.startConverting(), 700)
        }, 5000)
    }

    render() {
        console.log('stizy', this.state.speech)
        return (
            <Fragment>
                <div className="container">
                    <div id="speech" name='speech' className="text-box" contentEditable="true" suppressContentEditableWarning={true}>{this.state.speech}</div>
                    <button onClick={this.startConverting}><i className="fa fa-microphone"></i></button>
                </div>
                <audio className="sound" src="beep.mp3"></audio>
            </Fragment>
        )
    }

}