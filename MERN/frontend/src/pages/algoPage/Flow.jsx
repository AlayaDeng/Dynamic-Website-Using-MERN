import React, { Component } from 'react';
import { createCanvas } from 'algorithmx';

import Scarf from "../../components/Scarf";
import Catalogue from "../../components/algrx/Catalogue";


class Flow extends Component {
    refresh = () => {
        window.location.reload();
    }
    componentDidMount() {
        const canvas = createCanvas('cutrod');

        canvas.size([700, 300]);
        canvas.duration(0).svgattr('style', 'background-color: #eeeeee')

        const animateText = (label, text) =>
            label
                .visible(false)
                .pause(0.5)
                .text(text)
                .visible(true)
                .pause(0.4)
        const titleLabel = canvas.label('title')
        titleLabel.add({ pos: [0, '0.5cy'], text: '' })
    }
    render() {
        return (
            <div className="flow">
                <div className='ctn'>
                    <Scarf text='实战示例 - 网络流'/>
                </div>
                <div className='algorithm-brim'></div>
                <div className="catalogue-content">
                    <div className='catalogue'><Catalogue /></div>
                    <div className='algorithm-content'>
                        网络流
                        <div id='cutrod'></div>
                        <button onClick={this.refresh}>restart</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Flow;