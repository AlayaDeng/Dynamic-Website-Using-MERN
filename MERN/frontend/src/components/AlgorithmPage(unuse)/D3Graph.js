import React, {Component} from 'react'; 
import { Graph } from "react-d3-graph";


class D3Graph extends Component{
    render(){

        // graph payload (with minimalist structure)
        const data = {
            nodes: [
                { id: "S", color: "#EFAFED" , x: 4, y: 1}, 
                { id: "V1", color: "#DAE3F3" , x: 0, y: 1}, 
                { id: "V2", color: "#DAE3F3" , x: 3, y: 0},
                { id: "V3", color: "#DAE3F3" , x: 1, y: 2},
                { id: "V4", color: "#DAE3F3" , x: 5, y: 2},
                { id: "t", color: "#C5E0B4" , x: 3, y:3}
            ],
            links: [
                { source: "S", target: "V1" },
                { source: "S", target: "V2" },
                { source: "V1", target: "V2" },
                { source: "V1", target: "V3" },
                { source: "V1", target: "V4" },
                { source: "V2", target: "V4" },
                { source: "V3", target: "t" },
                { source: "V4", target: "t" }
            ],
        };

        // the graph configuration, just override the ones you need
        const myConfig = {
            directed: true,
            freezeAllDragEvents: false,
            automaticRearrangeAfterDropNode: false,
            collapsible: false,
            highlightDegree: 1,
            highlightOpacity: 0.2,
            linkHighlightBehavior: true,
            maxZoom: 8,
            minZoom: 0.1,
            nodeHighlightBehavior: true,
            staticGraph: false,
            panAndZoom: false,
            node: {
                size: 500,
                highlightStrokeColor: "blue",
                labelProperty: "name",
                mouseCursor: "crosshair",
                opacity: 1,
                renderLabel: true,
                svg: "",
                symbolType: "circle",
                viewGenerator: null,
            },
            link: {
                highlightColor: "lightblue",
                mouseCursor: "pointer",
                semanticStrokeWidth: true,
                strokeWidth: 2,
                type: "STRAIGHT",
            },
            d3: {
                gravity: -300,
                linkLength: 100,
            },
        };

        // const onClickNode = function(nodeId) {
        //     window.alert(`Clicked node ${nodeId}`);
        // };

        // const onClickLink = function(source, target) {
        //     window.alert(`Clicked link between ${source} and ${target}`);
        // };
        return (
            <div>
                <div id="demo">
                    this is about graph
                    <Graph
                        id="graph-id" // id is mandatory
                        data={data}
                        config={myConfig}
                        // onClickNode={onClickNode}
                        // onClickLink={onClickLink}
                    />;
                </div>
            </div>
        )
    }
}

export default D3Graph;