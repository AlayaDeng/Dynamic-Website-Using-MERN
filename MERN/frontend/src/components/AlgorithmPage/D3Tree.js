// import { Component } from "react";
import Tree from 'react-d3-tree';

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
    name: 'CEO',
    children: [
        {
        name: 'Manager',
        attributes: {
            department: 'Production',
        },
        children: [
            {
            name: 'Foreman',
            attributes: {
                department: 'Fabrication',
            },
            children: [
                {
                name: 'Worker',
                },
            ],
            },
            {
            name: 'Foreman',
            attributes: {
                department: 'Assembly',
            },
            children: [
                {
                name: 'Worker',
                },
            ],
            },
        ],
        },
    ],
};

export default function D3Tree() {
    return (
        // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
        <div id="treeWrapper" style={{ width: '50em', height: '20em' }}>
        <Tree data={orgChart} />
        </div>
    );
}

// class D3Tree extends Component {
//     render() {
//         return (
//             <div>This is a d3-tree</div>
//         )
//     }
// }

// export default D3Tree;