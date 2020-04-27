import React from 'react';

class Timer2 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      time: 0,
      start: 0,
      isOn: false
    }

    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }

  componentDidMount() {
    this.startTimer()
  }


  startTimer() {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true
    })
    this.timer = setInterval(() => this.setState ({
      time: Date.now() - this.state.start
    }), 1000)
  }

  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }

  resetTimer() {
    this.setState({time: 0})
  }

  render() {

    let start = (this.state.time == 0) ? <button onClick={this.startTimer}>Start</button> : null

    let stop = (this.state.isOn) ? <button onClick={this.stopTimer}>Stop</button> : null

    let reset = (this.state.time != 0 && !this.state.isOn) ? <button onClick={this.resetTimer}>Reset</button> : null

    let resume = (this.state.time != 0 && !this.state.isOn) ? <button onClick={this.startTimer}>Resume</button> : null
    
    var date = new Date();
    
    date.setTime(this.state.time)
    let minutes = '0' + date.getUTCMinutes()
    let seconds = '0' + date.getUTCSeconds()
    let timer = minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2)
    
    return (
      <div>
        <h3 className="timer">{timer}</h3>
        {start}
        {resume}
        {stop}
        {reset}
      </div>
    )
  }
}



export default Timer2;
