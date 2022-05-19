import React, { Component } from 'react';

import './AlgoApplication.css';

class AlgoApplication extends Component{
    openPaper1 = () => {
        window.open("https://linkspringer.53yu.com/article/10.1007/s11042-020-10139-6")
    }
    openPaper2 = () => {
        window.open("https://www.sciencedirect.com/science/article/pii/S0045782520307945")
    }
    openPaper3 = () => {
        window.open("https://linkspringer.53yu.com/article/10.1007/s00330-021-07715-1")
    }
    openPaper4 = () => {
        window.open("https://www.frontiersin.org/articles/10.3389/fpubh.2020.00357/full")
    }
    render() {
        return (
            <div className="algoapplication">
                <div className="aa-paper">
                    <p>A review on genetic algorithm: past, present, and future</p>
                    <button className='aa-btn' onClick={this.openPaper1}>view</button>
                </div>
                <div className="aa-paper">
                    <p>The Arithmetic Optimization Algorithm</p>
                    <button className='aa-btn' onClick={this.openPaper2}>view</button>
                </div>
                <div className="aa-paper">
                    <p>A deep learning algorithm using CT images to screen for Corona virus disease (COVID-19)</p>
                    <button className='aa-btn' onClick={this.openPaper3}>view</button>
                </div>
                <div className="aa-paper">
                    <p>COVID-19 Patient Health Prediction Using Boosted Random Forest Algorithm</p>
                    <button className='aa-btn' onClick={this.openPaper4}>view</button>
                </div>
            </div>
        )
    }
}

export default AlgoApplication;