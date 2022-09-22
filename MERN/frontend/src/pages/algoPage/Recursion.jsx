import React, { Component } from 'react';
import { createCanvas } from 'algorithmx';

import Scarf from "../../components/Scarf";
import Catalogue from "../../components/algrx/Catalogue";

class Recursion extends Component{
    refresh = () => {
        window.location.reload();
    }
    componentDidMount() {
        // select a div with id 'output' for rendering the network
        const canvas = createCanvas('output');

        canvas.size([500, 300]);
        canvas.duration(0).svgattr('style', 'background-color: #eeeeee');

        // // restart icon
        // let restart = new Image();
        // restart.src = './../../img/restart_icon.png';
        // restart.onload=function(){
        //     canvas.drawImage(restart,50,50,50,50);
        // };

        // algorithmx
        
        const animateText = (label, text) =>
            label
                .visible(false)
                .pause(0.5)
                .text(text)
                .visible(true)
                .pause(0.4)

        const titleLabel = canvas.label('title')
        titleLabel.add({ pos: [0, '0.5cy'], text: '' })

        canvas.node(3).add({ pos: [-30, 0] })
        canvas.node(5).add({ pos: [-20, 0] })
        canvas.edge([3, 5]).add().color("eeeeee")
        canvas.node(7).add({ pos: [-10, 0] })
        canvas.edge([5, 7]).add().color("eeeeee")
        canvas.node(8).add({ pos: [0, 0] })
        canvas.edge([7, 8]).add().color("eeeeee")
        canvas.node(9).add({ pos: [10, 0] })
        canvas.edge([8, 9]).add().color("eeeeee")
        canvas.node(12).add({ pos: [20, 0] })
        canvas.edge([9, 12]).add().color("eeeeee")
        canvas.node(15).add({ pos: [30, 0] })
        canvas.edge([12, 15]).add().color("eeeeee")

        animateText(titleLabel, '1. Divide: Check middle element.')
        canvas.pause(2)
        animateText(titleLabel, 'compare the middle element and the target')
        canvas.node(8).color('green').highlight().size('1.2x')
        canvas.pause(2)

        animateText(titleLabel, 'target(9) > 8: Choose the right part')
        canvas.node(9).color('#888888').highlight().size('1.2x')
        canvas.node(12).color('#888888').highlight().size('1.2x')
        canvas.node(15).color('#888888').highlight().size('1.2x')
        canvas.pause(2)
        canvas.node(9).color('#323232')
        canvas.node(12).color('#323232')
        canvas.node(15).color('#323232')
        canvas.pause(1)

        animateText(titleLabel, '2. Conquer: Recursively search 1 subarray.')
        canvas.pause(2)
        animateText(titleLabel, 'compare the middle element and the target')
        canvas.node(12).color('green').highlight().size('1.2x')
        canvas.pause(1.5)

        animateText(titleLabel, 'target(9) < 12: Choose the left part')
        canvas.node(9).color('#888888').highlight().size('1.2x')
        canvas.pause(2)
        canvas.node(9).color('#323232')
        canvas.pause(1)

        animateText(titleLabel, '3. Conquer: Recursively search 1 subarray.')
        canvas.pause(2)
        animateText(titleLabel, 'compare the middle element and the target')
        canvas.node(9).color('green').highlight().size('1.2x')
        canvas.pause(2)

        animateText(titleLabel, 'target(9) == 9: Find the target successfully!')
        canvas.pause(2)
        canvas.node(9).color('red').highlight().size('1.2x')

        window.canvas = canvas;
    }
    render(){
        return (
            <div className="recursion">
                <div className='ctn'>
                    <Scarf text='实战示例 - 递归与分治'/>
                </div>
                <div className='algorithm-brim'></div>
                <div className="catalogue-content">
                    <div className='catalogue'><Catalogue /></div>
                    <div className='algorithm-content'>
                        <p className='algo-title'>递归与分治 -- 数组查找</p>
                        <div className='algo-question'>
                            <p align='left'>Find an element in a sorted array:</p>
                            <p align='left'>1. Divide: Check middle element.</p>
                            <p align='left'>2. Conquer: Recursively search 1 subarray.</p>
                            <p align='left'>3. Combine: Trivial.</p>
                            <p>&nbsp;</p>
                            <p align='left'>Example: Find 9</p>
                        </div>
                        <div className='algo-algrx'>
                            <div className='algrx-svg'>
                                <div id="output">
                                </div>
                            </div>
                            <button onClick={this.refresh}>restart</button>
                            <div className='algrx-code'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recursion;