import React, { Component } from 'react';

import './Resource.css';

import Scarf from "../components/Scarf";


class Resource extends Component {
    constructor( props ){
        super();
        this.state = { ...props };
    }
    
    openEOJ = () => {
        window.open("https://acm.ecnu.edu.cn/")
    }
    openLeetCode = () => {
        window.open("https://leetcode-cn.com/")
    }
    openNowCoder = () => {
        window.open("https://www.nowcoder.com/exam/company")
    }
    openAlgoVis = () => {
        window.open("https://algorithm-visualizer.org/")
    }
    openVisuAlgo = () => {
        window.open("https://visualgo.net/zh")
    }
    openDSVisu = () => {
        window.open("https://www.cs.usfca.edu/~galles/visualization/Algorithms.html")
    }

    render(){
        return (
            <div className='resource' div style={{backgroundColor:'rgba(251, 238, 226, 0.1)'}}>
                <Scarf text="相关资源" />
                <div className='resource-board'>
                    <div className='re-board-title'>
                        <p className='re-board-font'>点击跳转链接 ^_^</p>
                    </div>
                    <div className='re-board-btn'>
                        <button onClick={this.openEOJ} className='resource-btn'>ECNU Online Judge</button>
                        <button onClick={this.openLeetCode} className='resource-btn'>力扣</button>
                        <button onClick={this.openNowCoder} className='resource-btn'>牛客网</button>
                        <button onClick={this.openAlgoVis} className='resource-btn'>Algorithm Visualizer</button>
                        <button onClick={this.openVisuAlgo} className='resource-btn'>VisuAlgo</button>
                        <button onClick={this.openDSVisu} className='resource-btn'>Data Structure</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Resource;