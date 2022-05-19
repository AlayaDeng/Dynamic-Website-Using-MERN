import React, { Component } from 'react';
import { createCanvas } from 'algorithmx';


class MergeSort extends Component {
    // constructor(){
    //     super();
    //     this.canvas = React.createRef();
    // }
    componentDidMount() {
        // select a div with id 'output' for rendering the network
        const canvas = createCanvas('output');

        // add three blue nodes
        canvas.nodes(['A', 'B', 'C']).add().color('blue');

        // add an edge
        canvas.edge(['A', 'C']).add();

        // pause for half a second
        canvas.pause(0.5);

        // temporarily make node 'B' 1.5 times as large
        canvas.node('B').highlight().size('1.5x');
        window.canvas = canvas;
    }
    render() {
        return (
            <div>
                {/* <canvas ref={this.canvas} width="780" height="1800">
                    您的浏览器不支持canvas，请更换浏览器.
                </canvas> */}
            </div>
        )
    }
}

export default MergeSort;