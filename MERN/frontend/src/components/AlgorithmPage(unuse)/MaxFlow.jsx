import { Component } from "react";

import './MaxFlow.css';

import Episode from "../../episode/Episode";

// img
import flow_0 from '../../img/Graph_Flow_0.png';
import flow_1 from '../../img/Graph_Flow_1.png';

class MaxFlow extends Component {
    state = {
        state_id: 0,
        title: 'Maximum Flow Problem 最大流问题',
        compendium: '• 从s到t输水，每条边都是固定容量的管道，一共能从s输多少水到t？',
        imgsrc: flow_0,
        explain: 'this is explain',
    }

    COMPENDIUM = {
        0: '• 从s到t输水，每条边都是固定容量的管道，一共能从s输多少水到t？',
        1: '• 从s到t输水，每条边都是固定容量的管道，一共能从s输多少水到t？',
    }

    IMGSRC = {
        0: flow_0,
        1: flow_1
    }

    EXPLAIN = {
        0: '0',
        1: '• 比如从v1到v4，此时的水流量flow是 1 ，容量capacity是 4 ，那么这条管道的 residual （剩余可流通水量）是3 ',
    }

    previousEpisode = () => {
        let state_id = this.state.state_id;
        if (state_id === 0) {
            return ;
        }
        state_id -= 1;
        this.setState({
            state_id: state_id,
            compendium: this.COMPENDIUM[state_id],
            imgsrc: this.IMGSRC[state_id],
            explain: this.EXPLAIN[state_id]
        })
        // this.forceUpdate();

    }

    nextEpisode = () => {
        let state_id = this.state.state_id;
        if (state_id >= this.COMPENDIUM.length) {
            return ;
        }
        state_id += 1;
        this.setState({
            state_id: state_id,
            compendium: this.COMPENDIUM[state_id],
            imgsrc: this.IMGSRC[state_id],
            explain: this.EXPLAIN[state_id]
        })
        // this.forceUpdate();

    }


    render() {
        return (
            <div className="maxflow">
                <Episode 
                    e_id={this.state.state_id}
                    title = {this.state.title}
                    compendium = {this.state.compendium}
                    imgsrc = {this.state.imgsrc}
                    explain = {this.state.explain}
                />
                <div className="episode-click">
                    <button onClick={this.previousEpisode}>previous</button>
                    <div>{this.state.state_id}</div>
                    <button onClick={this.nextEpisode}>next</button>
                </div>
            </div>
        )
    }
}

export default MaxFlow;