# react-countdown-clock

This project is for a custom react countdown clock that will countdown from a provided date to 0.


The countdown clock will display as a series of blocks, containing days, hours, minutes, seconds until the date that is provided.

The countdown clock also allows for an afterfunction to be executed, this will trigger once the countdown has finished.

Once the countdown clock has reached zero all of the digits will stay at 0.


Example Usage: 

```
    import CountdownClock from "react-custom-countdown-clock

    \\\ Class code


    render() {
        return <CountdownClock endTime={this.state.endTime} afterFunction={this.alertUsers} 
    }