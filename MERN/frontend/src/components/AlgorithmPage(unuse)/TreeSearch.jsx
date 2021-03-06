import React from 'react';
import './TreeSearch.css';
import {getDfsAnimations, getBfsAnimations} from '../../algorithms/TreeSearching';


export default class TreeSearch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tree: [],
		};
	}

	componentDidMount() {
        this.resetTree();
    }

    resetTree() {
        this.clearTreeFormatting();
        const tree = [];
        //Randomize the numbers
        for (let i = 0; i < 7; i++) {
            tree.push(randomIntFromInterval(1, 1000));
        }	
        this.setState({tree});
    }

    clearTreeFormatting() {
        const treeNodes = document.getElementsByClassName('tree-node');
        //Clear the colors
        for (const node of treeNodes) {
            node.style.backgroundColor = "#ffffff"
        }
    }

    dfs() {
        this.clearTreeFormatting();
        const animations = getDfsAnimations(this.state.tree, this.state.tree[2]);
        for (let i = 0; i < animations.length; i++) {
            const treeNodes = document.getElementsByClassName('tree-node');
            const nodeIdx = animations[i];
            console.log(nodeIdx);
            const nodeStyle = treeNodes[nodeIdx].style;
            let color = '#66c2ff';
            if (i === animations.length - 1 && this.state.tree[nodeIdx] === this.state.tree[2])
                color = '#33cc33';
            setTimeout(() => {
                nodeStyle.backgroundColor = color;
            } , 1000 * i);
        }
    }

    bfs() {
        this.clearTreeFormatting();
        const animations = getBfsAnimations(this.state.tree, this.state.tree[2]);
        for (let i = 0; i < animations.length; i++) {
            const treeNodes = document.getElementsByClassName('tree-node');
            const nodeIdx = animations[i];
            console.log(nodeIdx);
            const nodeStyle = treeNodes[nodeIdx].style;
            let color = '#66c2ff';
            if (i === animations.length - 1 && this.state.tree[nodeIdx] === this.state.tree[2])
                color = '#33cc33';
            setTimeout(() => {
                nodeStyle.backgroundColor = color;
            } , 1000 * i);
        }
    }

    render() {
        const {tree} = this.state;
        return (
            <div className="array-container">
                {
                    tree.map((value, idx) => (
                    <div
                        className="tree-node"
                        key={idx}
                    >{value}</div>
                    ))
                }
                <button onClick={() => this.resetTree()}>Generate New Tree</button>
                <button onClick={() => this.dfs()}>DFS</button>
                <button onClick={() => this.bfs()}>BFS</button>

            </div>	
            );
    }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}