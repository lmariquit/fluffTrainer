import React, { Component } from 'react'
let countDownDate

export default class Timer extends Component {
    constructor() {
        super()
        this.state = ({
            hours: '00',
            minutes: '00',
            seconds: '00',
        })
        this.startTimer = this.startTimer.bind(this)
        this.timeCount = this.timeCount.bind(this)
    }

    timeCount(countDownDate) {
        let now = new Date().getTime();
        let distance = now - countDownDate.getTime();

        let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let hours = h < 10 ? `0${h}` : h

        let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let minutes = m < 10 ? `0${m}` : m

        let s = Math.floor((distance % (1000 * 60)) / 1000);
        let seconds = s < 10 ? `0${s}` : s

        this.setState({
            hours,
            minutes,
            seconds
        })
    }

    startTimer() {
        countDownDate = new Date()
        setInterval(()=>this.timeCount(countDownDate), 100);
    }

    render() {
        const { hours, minutes, seconds } = this.state
        return (
            <div>{hours}:{minutes}:{seconds}
                <button onClick={this.startTimer}>START</button>
            </div>
        )
    }
}
