import React, { Component } from 'react';
import { createCanvas } from 'algorithmx';

import './HistoryLine.css';

// import img_his from '../../img/history.png';


class HistoryLine extends Component{
    // refresh = () => {
    //     window.location.reload();
    // }
    componentDidMount() {
        const canvas = createCanvas('his-line');

        canvas.size([900, 300]);
        canvas.duration(0).svgattr('style', 'background-color: #eeeeee');
        
        canvas.label(1).add({
            text: '辗转相除法',
            size: 20,
            pos: [-380, -40]
        })
        canvas.label(2).add({
            text: '欧几里得算法',
            size: 20,
            pos: [-380, 40]
        })
        canvas.label(3).add({
            text: '《周髀算经》',
            size: 20,
            pos: [-150, -40]
        })
        canvas.label(4).add({
            text: 'algorism',
            size: 20,
            pos: [100, 40]
        })
        canvas.label(5).add({
            text: '《几何原本》',
            size: 20,
            pos: [300, 40]
        })

        canvas.node(0).add({
            shape: 'rect',
            color: '#999999',
            size: [30, 12],
            pos: [-400, 0],
            fixed: true,
            labels: { 0: { text: '300BC'} }
        })
        canvas.node(1).add({
            shape: 'rect',
            color: '#999999',
            size: [30, 12],
            pos: [-150, 0],
            fixed: true,
            labels: { 0: { text: '100BC'} }
        })
        canvas.node(2).add({
            shape: 'rect',
            color: '#999999',
            size: [30, 12],
            pos: [100, 0],
            fixed: true,
            labels: { 0: { text: '900AD'} }
        })
        canvas.node(3).add({
            shape: 'rect',
            color: '#999999',
            size: [30, 12],
            pos: [300, 0],
            fixed: true,
            labels: { 0: { text: '1607AD'} }
        })
        canvas.node(4).add({
            shape: 'rect',
            color: '#999999',
            size: [30, 12],
            pos: [400, 0],
            fixed: true,
            labels: { 0: { text: 'now'} }
        })
        
        canvas.edge([0, 1]).add().color("eeeeee")
        canvas.edge([1, 2]).add().color("eeeeee")
        canvas.edge([2, 3]).add().color("eeeeee")
        canvas.edge([3, 4]).add().color("eeeeee")


        window.canvas = canvas;
    }
    render() {
        return (
            <div className='historyline'>
                <div className='his-svg'>
                    <div id="his-line"></div>
                </div>
                {/* <button className='his-btn' onClick={this.refresh}>restart</button> */}
            </div>
        );
    }
}

export default HistoryLine;