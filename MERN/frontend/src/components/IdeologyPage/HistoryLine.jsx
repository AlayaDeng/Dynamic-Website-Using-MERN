import React from 'react';
import Tree from 'react-d3-tree';

import './HistoryLine.css';

import img_his from '../../img/history.png';

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
        ],
        },
    ],
};

function HistoryLine() {
    return (
        <div className='historyline'>
            <div id="treeWrapper">
                {/* <Tree data={orgChart} /> */}
                <img src={img_his} alt='' />
            </div>
        </div>
    );
}

export default HistoryLine;