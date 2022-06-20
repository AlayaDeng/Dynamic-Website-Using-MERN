import React, { Component } from 'react';

import './SlideShow.css';

// img
import img1 from '../../img/szh.png';
import img2 from '../../img/xiaochunyun.jpg';
import img3 from '../../img/hegaoqi.jpg';
import img4 from '../../img/xushimeng.jpg'
import img5 from '../../img/jsj.jpg';
import img6 from '../../img/yltx.jpg';

class SlideShow extends Component {
    openPage1 = () => {
        window.open("http://www.cs.ecnu.edu.cn/de/e7/c24535a384743/pagem.htm")
    }
    openPage2 = () => {
        window.open("https://faculty.ecnu.edu.cn/_s16/xcy/main.psp")
    }
    openPage3 = () => {
        window.open("https://faculty.ecnu.edu.cn/_s16/hgq2/main.psp")
    }
    openPage4 = () => {
        window.open("http://www.cs.ecnu.edu.cn/c8/77/c24539a247927/page.htm")
    }
    openPage5 = () => {
        window.open("http://www.cs.ecnu.edu.cn/18/98/c24535a333976/page.htm")
    }
    openPage6 = () => {
        window.open("https://mp.weixin.qq.com/s/_MOKFvvX9T9U5nvIqx8vgw")
    }

    render() {
        return (
            <div className='slideShow'>
                <div className='slideshow-container'>
                    <img src={img1} alt='' className='slideshow-img' onClick={this.openPage1} />
                    <div className='slideshow-font'>“数字化转型与数字孪生”校庆…</div>
                </div>
                <div className='slideshow-container'>
                    <img src={img2} alt='' className='slideshow-img' onClick={this.openPage2} />
                    <div className='slideshow-font'>肖春芸</div>
                </div>
                <div className='slideshow-container'>
                    <img src={img3} alt='' className='slideshow-img' onClick={this.openPage3} />
                    <div className='slideshow-font'>何高奇</div>
                </div>
                <div className='slideshow-container'>
                    <img src={img4} alt='' className='slideshow-img' onClick={this.openPage4} />
                    <div className='slideshow-font'>徐世猛</div>
                </div>
                <div className='slideshow-container'>
                    <img src={img5} alt='' className='slideshow-img' onClick={this.openPage5} />
                    <div className='slideshow-font'>计算机学院举办校庆特邀报告…</div>
                </div>
                <div className='slideshow-container'>
                    <img src={img6} alt='' className='slideshow-img' onClick={this.openPage6} />
                    <div className='slideshow-font'>感谢有你 “疫”路同行 计算机…</div>
                </div>
                
            </div>
        );
    }
}

export default SlideShow;