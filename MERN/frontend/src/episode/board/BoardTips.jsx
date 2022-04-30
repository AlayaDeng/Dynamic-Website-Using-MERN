import { Component } from 'react';

import './BoardTips.css';
import img_pu from '../../img/previous_un.png';
import img_n from '../../img/next.png';

import img_zcz from '../../img/zuchongzhi.jpg';

class BoardTips extends Component {
    openMorePage = () => {
        window.open('https://baike.baidu.com/item/%E7%A5%96%E5%86%B2%E4%B9%8B/121104')
    }
    render() {
        return (
            <div className='boardtips'>
                <img src={img_pu} alt='' className='bt-bookmark' />
                <div className='bt-content'>
                    <div className='bt-brief'>
                        <img src={img_zcz} alt='' className='bt-img' />
                        <div className='bt-name'>
                            <div className='bt-name-top'>祖冲之（429年－500年）</div>
                            <p className='bt-name-more'>字文远，范阳郡遒县（今河北省涞水县）人，南北朝时期杰出的数学家、天文学家。</p>
                        </div>
                    </div>
                    <div className='bt-full'>
                        <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;出身范阳祖氏。一生钻研自然科学，其主要贡献在数学、天文历法和机械制造三方面。他在刘徽开创的探索圆周率的精确方法的基础上，首次将“圆周率”精算到小数第七位，即在3.1415926和3.1415927之间，他提出的“祖率”对数学的研究有重大贡献。直到16世纪，阿拉伯数学家阿尔·卡西才打破了这一纪录。</p>
                        <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;由他撰写的《大明历》是当时最科学最进步的历法，对后世的天文研究提供了正确的方法。其主要著作有《安边论》《缀术》《述异记》《历议》等。</p>
                    </div>
                    <div className='bt-more' onClick={this.openMorePage}>更多</div>
                </div>
                <img src={img_n} alt='' className='bt-bookmark' />
            </div>
        )
    }
}

export default BoardTips;