import React, { Component } from 'react';
import './App.css';
import AxiosClient from "./AxiosClient";

const axiosClient = new AxiosClient();

class  App  extends  Component {
    constructor(props) {
        super(props)
        this.state  = {
            points: [],
        };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getPoints = this.getPoints.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        let formElement = document.querySelector("form");
        let formData = new FormData(formElement);
        axiosClient.createPoint(formData).then((response) => {
                let oldPoints = this.state.points;
                oldPoints.push(response);
                this.setState({points: oldPoints});
                console.log(this.state.points);
            }).catch((error) => {
                console.log(error);
            })
    }

    getPoints(){
        axiosClient.getPoints().then((response) => {
            this.setState({points : response});
        })
    }

    render() {
        return (
        <div>
            <form encType="multipart/form-data" id="form" onSubmit={this.handleSubmit}>
                <div className="form_div">
                    <label itemID="lat">lat</label>
                    <input type="text" name="lat" id="lat" value="111"/>
                    <label itemID="lng">lng</label>
                    <input type="text" name="lng" id="lng"/>
                    <label itemID="img">img</label>
                    <input type="file" name="img" id="img"/>
                    <label itemID="place">place</label>
                    <input type="text" name="place" id="place"/>
                    <label itemID="result">result</label>
                    <input type="text" name="result" id="result"/>
                    <label itemID="notes">notes</label>
                    <input type="text" name="notes" id="notes"/>
                    <input type="submit" value="ok" name="ok" id="submit"/>
                </div>
            </form>
            <hr/>
            <button id="findAllPoints" onClick={this.getPoints}>Find all points</button>
            <div className="pointsArea">
                {
                    this.state.points.map(point =>
                        <div className="point">
                            <img className="pointImg" src={point.img} alt="no image"/>
                            <h3>{point.place}</h3>
                            <h5>{point.result}</h5>
                            <h5>{point.notes}</h5>
                            <p>{point.lat}</p>
                            <p>{point.lng}</p>
                            <p>Checked: {point.checked.toString()}</p>
                        </div>
                    )
                }
            </div>
        </div>
        );
    }
}
export  default  App;

