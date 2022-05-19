import { Component } from 'react';
// import { render } from 'react-dom';
// import MindMap from 'react-mindmap';
// import { nodes, connections } from '../app/algorithm.json';

import './Algorithm.css';

import Scarf from "../components/Scarf";
import Catalogue from '../components/algrx/Catalogue';
import img_mp from '../img/mp.png';

class Algorithm extends Component {
    render(){
        return (
            <div className="algo">
                <div className='ctn'>
                    <Scarf text='实战示例'/>
                </div>
                <div className='algorithm-brim'></div>
                <div className="catalogue-content">
                    <div className='catalogue'><Catalogue /></div>
                    <div className='algorithm-content'>
                        <img src={img_mp} alt='' className='img-mp' />
                        {/* <MindMap
                            nodes={this.props.nodes}
                            connections={this.props.connections}
                        /> */}
                    </div>
                </div>
            </div>
        )
    }
}
// render(
//     <Algorithm nodes={nodes} connections={connections} />,
//     document.getElementById('target')
// );

export default Algorithm;


