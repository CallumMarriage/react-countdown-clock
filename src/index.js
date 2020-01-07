import React, {Component} from "react";

import {Col, Row} from "react-flexbox-grid";

import "./CountdownClock.css"


class CountdownClock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            diffInDays: 0,
            diffInHours: 0,
            diffInMins: 0,
            diffInSecs: 0,
            finished: false
        };

        this.getTimeLeft = this.getTimeLeft.bind(this);
    }


    componentDidMount() {

        let intervalId = setInterval(this.getTimeLeft, 1000);
        // store intervalId in the state so it can be accessed later:
        this.setState({intervalId: intervalId});

    }


    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }


    getTimeLeft() {
        if(this.props.endTime !== null){

            let endTime = this.props.endTime;

            if (new Date() >= endTime) {

                if (this.state.finished === true) {
                    return;
                }

                this.setState({
                    diffInDays: 0,
                    diffInHours: 0,
                    diffInMins: 0,
                    diffInSecs: 0
                });

                this.setState({finished: true});

                if(this.props.afterFunction !== undefined){
                    this.props.afterFunction();

                }
                return
            }

            this.setState({finished: false})

            let i = endTime.getTime() - new Date().getTime();

            let delta = Math.abs(i) / 1000;

            let days = Math.floor(delta / 86400);
            delta -= days * 86400;
            let hours = Math.floor(delta / 3600) % 24;
            delta -= hours * 3600;
            let minutes = Math.floor(delta / 60) % 60;
            delta -= minutes * 60;
            let seconds = Math.round(delta % 60);

            this.setState({
                diffInDays: days,
                diffInHours: hours,
                diffInMins: minutes,
                diffInSecs: seconds
            })
        };
    }

    render() {

        return (
            <div className="clock">
                <p className="title">Auction Ends In</p>
                <Row className="clockRow">
                    <Col className="clockCol">
                        <p className="time"> {this.state.diffInDays}</p>
                    </Col>
                    <Col className="smallCol">
                        <p className="timeGap">:</p>
                    </Col>
                    <Col className="clockCol">
                        <p className="time">{this.state.diffInHours}</p>
                    </Col>
                    <Col className="smallCol">
                        <p className="timeGap">:</p>
                    </Col>
                    <Col className="clockCol">
                        <p className="time">{this.state.diffInMins}</p>
                    </Col>
                    <Col className="smallCol">
                        <p className="timeGap">:</p>
                    </Col>
                    <Col className="clockCol">
                        <p className="time">{this.state.diffInSecs}</p>
                    </Col>
                </Row>
                <Row className="clockRow">
                    <Col className="clockCol">
                        <p className="label">Days</p>
                    </Col>
                    <Col className="smallCol">

                    </Col>
                    <Col className="clockCol">
                        <p className="label">Hours</p>
                    </Col>
                    <Col className="smallCol">

                    </Col>
                    <Col className="clockCol">
                        <p className="label">Mins</p>
                    </Col>
                    <Col className="smallCol">

                    </Col>
                    <Col className="clockCol">
                        <p className="label">Secs</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CountdownClock;
