import React, { Component } from 'react';
import { createCanvas } from 'algorithmx';

import img_price from '../../img/rod_price.png';

import Scarf from "../../components/Scarf";
import Catalogue from "../../components/algrx/Catalogue";

import './Dp.css';

class Dp extends Component {
    refresh = () => {
        window.location.reload();
    }
    componentDidMount() {
        // select a div with id 'output' for rendering the network
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

        animateText(titleLabel, 'cut a 4-length rod')
        canvas.pause(9)

        // cut-a
        canvas.node(0).add({
            shape: 'rect',
            color: '#999999',
            size: [48, 12],
            pos: [-260, 10],
            fixed: true,
            labels: { 0: { text: '4'} }
        })
        canvas.label(1).add({
            text: '收益：9',
            size: 16,
            pos: [-260, 40]
        })

        // cut-b
        canvas.node(1).add({
            shape: 'rect',
            size: [12, 12],
            pos: [-120, 10],
            fixed: true,
            labels: { 0: { text: '1' } }
        })
        canvas.node(2).add({
            shape: 'rect',
            size: [36, 12],
            pos: [-80, 10],
            fixed: true,
            labels: { 0: { text: '3' } }
        })
        canvas.label(2).add({
            text: '收益：1 + 8',
            size: 16,
            pos: [-90, 40]
        })

        // cut-c
        canvas.node(3).add({
            shape: 'rect',
            color: '#999999',
            size: [24, 12],
            pos: [80, 10],
            fixed: true,
            labels: { 0: { text: '2' } }
        })
        canvas.node(4).add({
            shape: 'rect',
            color: '#999999',
            size: [24, 12],
            pos: [110, 10],
            fixed: true,
            labels: { 0: { text: '2' } }
        })
        canvas.label(3).add({
            text: '收益：5 + 5',
            size: 16,
            pos: [90, 40]
        })

        // cut-d
        canvas.node(5).add({
            shape: 'rect',
            size: [36, 12],
            pos: [260, 10],
            fixed: true,
            labels: { 0: { text: '3' } }
        })
        canvas.node(6).add({
            shape: 'rect',
            size: [12, 12],
            pos: [290, 10],
            fixed: true,
            labels: { 0: { text: '1' } }
        })
        canvas.label(4).add({
            text: '收益：8 + 1',
            size: 16,
            pos: [260, 40]
        })
        
        // cut-e
        canvas.node(7).add({
            shape: 'rect',
            size: [12, 12],
            pos: [-290, -100],
            fixed: true,
            labels: { 0: { text: '1' } }
        })
        canvas.node(8).add({
            shape: 'rect',
            size: [12, 12],
            pos: [-280, -100],
            fixed: true,
            labels: { 0: { text: '1' } }
        })
        canvas.node(9).add({
            shape: 'rect',
            size: [24, 12],
            pos: [-240, -100],
            fixed: true,
            labels: { 0: { text: '2' } }
        })
        canvas.label(5).add({
            text: '收益：1 + 1 + 5',
            size: 16,
            pos: [-260, -70]
        })
        
        // cut-f
        canvas.node(10).add({
            shape: 'rect',
            color: '#999999',
            size: [12, 12],
            pos: [-122, -100],
            fixed: true,
            labels: { 0: { text: '1' } }
        })
        canvas.node(11).add({
            shape: 'rect',
            color: '#999999',
            size: [24, 12],
            pos: [-87, -100],
            fixed: true,
            labels: { 0: { text: '2' } }
        })
        canvas.node(12).add({
            shape: 'rect',
            color: '#999999',
            size: [12, 12],
            pos: [-57, -100],
            fixed: true,
            labels: { 0: { text: '1' } }
        })
        canvas.label(6).add({
            text: '收益：1 + 5 + 1',
            size: 16,
            pos: [-88, -70]
        })
        
        // cut-g
        canvas.node(13).add({
            shape: 'rect',
            size: [24, 12],
            pos: [73, -100],
            fixed: true,
            labels: { 0: { text: '2' } }
        })
        canvas.node(14).add({
            shape: 'rect',
            size: [12, 12],
            pos: [107, -100],
            fixed: true,
            labels: { 0: { text: '1' } }
        })
        canvas.node(15).add({
            shape: 'rect',
            size: [12, 12],
            pos: [131, -100],
            fixed: true,
            labels: { 0: { text: '1' } }
        })
        canvas.label(7).add({
            text: '收益：5 + 1 + 1',
            size: 16,
            pos: [96, -70]
        })
        
        // cut-h
        canvas.node(16).add({
            shape: 'rect',
            color: '#999999',
            size: [12, 12],
            pos: [230, -100],
            fixed: true,
            labels: { 0: { text: '1' } }
        })
        canvas.node(17).add({
            shape: 'rect',
            color: '#999999',
            size: [12, 12],
            pos: [253, -100],
            fixed: true,
            labels: { 0: { text: '1' } }
        })
        canvas.node(18).add({
            shape: 'rect',
            color: '#999999',
            size: [12, 12],
            pos: [276, -100],
            fixed: true,
            labels: { 0: { text: '1' } }
        })
        canvas.node(19).add({
            shape: 'rect',
            color: '#999999',
            size: [12, 12],
            pos: [299, -100],
            fixed: true,
            labels: { 0: { text: '1' } }
        })
        canvas.label(8).add({
            text: '收益：1 + 1 + 1 + 1',
            size: 16,
            pos: [270, -70]
        })

        animateText(titleLabel, 'The most income cut way is 2+2 (income=5+5=10)')
        canvas.pause(2);
        canvas.node(3).color("green").highlight()
        canvas.node(4).color("green").highlight()
        canvas.pause(3);

        for (let i = 0; i < 20; i++) {
            canvas.node(`${i}`).remove();
            if (i < 9)
                canvas.label(`${i}`).remove();
        }

        animateText(titleLabel, 'So Rn = max of :')
        canvas.pause(3);
        canvas.node(20).add({
            shape: 'rect',
            color: 'blue',
            size: [40, 12],
            pos: [-260, 30],
            fixed: true,
            labels: { 0: { text: 'Pn(itself)' } }
        })
        canvas.node(21).add({
            shape: 'rect',
            color: 'blue',
            size: [40, 12],
            pos: [-160, 30],
            fixed: true,
            labels: { 0: { text: 'R1 + Rn-1' } }
        })
        canvas.node(22).add({
            shape: 'rect',
            color: 'blue',
            size: [40, 12],
            pos: [0, 30],
            fixed: true,
            labels: { 0: { text: 'R2 + Rn-2' } }
        })
        canvas.node(23).add({
            shape: 'rect',
            color: 'blue',
            size: [20, 12],
            pos: [100, 30],
            fixed: true,
            labels: { 0: { text: '...' } }
        })
        canvas.node(24).add({
            shape: 'rect',
            color: 'blue',
            size: [40, 12],
            pos: [240, 30],
            fixed: true,
            labels: { 0: { text: 'Rn-1 + R1' } }
        })
        canvas.pause(6);
        // canvas.node(25).add({
        //     shape: 'rect',
        //     color: 'green',
        //     size: [20, 12],
        //     pos: [0, -90],
        //     fixed: true,
        //     labels: { 0: { text: 'max' } }
        // })
        // canvas.pause(3);

        for (let i = 20; i < 25; i++) {
            canvas.node(`${i}`).remove();
        }

        animateText(titleLabel, 'The false code of CUT-ROD question:')
        canvas.pause(2);
        
        canvas.label(9).add({
            text: 'if n == 0',
            size: 20,
            color: "#323232",
            pos: [-80, 40]
        })
        canvas.pause(1);
        canvas.label(10).add({
            text: 'return 0',
            size: 20,
            color: "#323232",
            pos: [-40, 10]
        })
        canvas.pause(1);
        canvas.label(11).add({
            text: 'q = -∞',
            size: 20,
            color: "#323232",
            pos: [-88, -20]
        })
        canvas.pause(1);
        canvas.label(12).add({
            text: 'for i=1 to n',
            size: 20,
            color: "#323232",
            pos: [-70, -50]
        })
        canvas.pause(1);
        canvas.label(13).add({
            text: 'q = max(q, p[1] + CUT-ROD(p, n-i))',
            size: 20,
            color: "#323232",
            pos: [80, -80]
        })
        canvas.pause(1);
        canvas.label(14).add({
            text: 'return q',
            size: 20,
            color: "#323232",
            pos: [-80, -110]
        })



        window.canvas = canvas;
    }
    render() {
        return (
            <div className="dp">
                <div className='ctn'>
                    <Scarf text='实战示例 - 动态规划'/>
                </div>
                <div className='algorithm-brim'></div>
                <div className="catalogue-content">
                    <div className='catalogue'><Catalogue /></div>
                    <div className='algorithm-content'>
                        <div>
                            <p className='algo-title'>动态规划 -- 钢条切割</p>
                            {/* <p align='left'>1、设计状态</p>
                            <p align='left'>2、写出状态转移方程</p>
                            <p align='left'>3、设定初始状态</p>
                            <p align='left'>4、执行状态转移</p>
                            <p align='left'>5、返回最终的解</p> */}
                        </div>
                        <p>&nbsp;</p>
                        <div className='algo-question'>
                            <p>给定一段长度为n英寸的钢条和一个价格表Pi(i=1, 2, ..., n)</p>
                            <img src={img_price} alt='' className='img_price' />
                            <p>求切割钢条方案，使得销售收益Rn最大</p>
                            <p>注：如果钢条本身的对应价格足够大，可以选择不切割</p>
                        </div>

                        <div className='algo-way'>
                            <p>考虑n=4的情况，一共有 2^(4-1)=8 种切割方案</p>
                        </div>
                        <div id='cutrod'></div>
                        <button onClick={this.refresh}>restart</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dp;