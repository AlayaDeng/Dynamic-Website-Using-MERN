import React from "react";
import ReactWordcloud from "react-wordcloud";

import './AlgorithmCloud.css';

import img_pu from '../../img/previous_un.png';
import img_n from '../../img/next.png';

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";


const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [5, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
};

const words =  [
    {
        text: '更相减损术',
        value: 1,
    },
    {
        text: '盈亏术',
        value: 1,
    },
    {
        text: '方程术',
        value: 1,
    },
    {
        text: '割圆术',
        value: 1,
    },
    {
        text: '球积术',
        value: 1,
    },
    {
        text: '天元术',
        value: 1,
    },
    {
        text: '大衍求一术',
        value: 1,
    },
    {
        text: '增乘开方术',
        value: 1,
    },
    {
        text: '正负开方术',
        value: 1,
    },
    {
        text: '四元术',
        value: 1,
    },
    {
        text: '隙积术',
        value: 1,
    },
    {
        text: '招差术',
        value: 1,
    },
    {
        text: '尖锥求积术',
        value: 1,
    }
];


function AlgorithmCloud() {
    return (
        <div className="algorithmcloud">
            <div className="ac-title">
                <h2>中国古代算法</h2>
                <h3>中国古代数学，就是一部算法大全。 ————吴文俊</h3>
            </div>
            <div className="ac-content">
                <div style={{ height: 300, width: 400 }}>
                    <ReactWordcloud options={options} words={words} />
                </div>
                <img src={img_pu} alt='' className='bt-bookmark' />
                <div className="ac-explanation">
                    <h3>更相减损术</h3>
                    <p align="left">“更相减损术”来自《九章算术》，一般简称《九章》，它是中国第一部数学专著，一共有九章内容。《九章》定型不晚于公元100年，但其作者不可考，后世流行的版本是经三国时期数学家刘徽加工之后的《九章算术注》（公元263年出版）。刘徽在《九章算术注》中曾明确指出，“更相减损术”的原理在于：在运算过程中，整数逐步减小，但其等数却始终保持不变。顺便提一句，《九章》中主要是利用“更相减损术”来约分，所以它完全包含在“约分术”中：“副置分母、子之数，以少减多，更相减损，求其等也。以等数约之。”就是求出分子、分母的最大公因子（等数），然后分子分母同除以最大公因子。</p>
                </div>
                <img src={img_n} alt='' className='bt-bookmark' />
            </div>
        </div>
    )
}

export default AlgorithmCloud;