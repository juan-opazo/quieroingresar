import React from 'react';

let count = 0;
let intervalAction = setInterval(() => count = Date.now() - count , 10);

// const startStopWatch = () => intervalAction;

// const pauseStopWatch = () => {
//     clearInterval(intervalAction);
// }

// const getStopWatchLabel = () => {
//     let minutes = parseInt(count / 60);
//     let hours = parseInt(count / 3600);
//     let label = `0${hours}:0${minutes}`;
//     console.log(label + ':' + count);
//     if(hours > 9 && minutes > 9) label = `${hours}:${minutes}`;
//     else if(hours > 9) label = `0${hours}:${minutes}`;
//     return label;
// }

// const StopWatch = () => {
//     startStopWatch();
//     return (
//         <button onClick={pauseStopWatch}>{getStopWatchLabel()}</button>
//     );
// }

// class StopWatch extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { counter: 0 };
//     }
//     componentDidMount() {
//         this.startStopWatch();
//     }
//     componentWillUnmount() {
//         this.pauseStopWatch();
//     }
//     startStopWatch = () => intervalAction
    
//     pauseStopWatch = () => {
//         clearInterval(intervalAction);
//     }
//     getStopWatchLabel = () => {
//         let minutes = Math.floor(count / 60000) % 60; //parseInt(count / 60);
//         let seconds = Math.floor(count / 1000) % 60; //count % 60;
//         let label = `0${minutes}:0${seconds}`;
//         if(seconds > 9 && minutes > 9) label = `${minutes}:${seconds}`;
//         else if(seconds > 9) label = `0${minutes}:${seconds}`;
//         return label;
//     }
//     render() {
//         return (
//             <button onClick={this.pauseStopWatch}>{this.getStopWatchLabel()}</button>
//         );
//     }
// }

class StopWatch extends React.Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };
    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
            timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };
    stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
    };
    getStopWatchLabel = () => {
        const { timerTime } = this.state;
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        return `${hours}:${minutes}:${seconds}`;
    }
    componentDidMount() {
        this.startTimer();
    }
    render() {
        return (
            <button onClick={this.stopTimer}>{this.getStopWatchLabel()}</button>
        );
    }
}

export default StopWatch;