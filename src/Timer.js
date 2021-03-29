import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    //console.log(this.state.count)
    let start = (this.state.count == 0) ? <button onClick={this.doIntervalChange}>Start</button> : null

    var date = new Date();
    
    date.setTime(this.state.count * 1000)
    let minutes = '0' + date.getUTCMinutes()
    let seconds = '0' + date.getUTCSeconds()
    let timer = minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2)
    //console.log(timer)
    return (
      <div>
        <h3 className="timer">{timer}</h3>
        {start}
      </div>
    )
  }

  componentDidMount() {
    const startCount = 0
    this.setState({
      count: startCount
    })
    //Auto Start
    //this.doIntervalChange()
  }

  doIntervalChange = () => {
    this.myInterval = setInterval(()=> {
      this.setState(prevState => ({
        count: prevState.count + 1
      }))
    }, 1000)
  }
  
  componentWillUnmount() {
    clearInterval(this.myInterval)
    this.state.count = 0
  }
}

export default Timer;
