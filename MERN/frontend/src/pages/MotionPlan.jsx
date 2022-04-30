import { Component } from 'react';
import './MotionPlan.css';

import Scarf from '../components/Scarf';
import Catalogue from "../components/AlgorithmPage/Catalogue";

class MotionPlan extends Component {
    openMotionPlan = () => {
        window.open("http://124.222.12.165:42131/Robot-Motion-Planning/index.html")
    }
    render() {
        return (
            <div className='motionplan'>
                <div className='ctn'>
                    <Scarf text='实战示例 - 运动计划'/>
                </div>
                <div className="algorithm-brim">
                </div>
                <div className="catalogue-content">
                    <div className='catalogue'><Catalogue /></div>
                    <div className="algorithm-content">
                        <button onClick={this.openMotionPlan}>try it!</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MotionPlan;