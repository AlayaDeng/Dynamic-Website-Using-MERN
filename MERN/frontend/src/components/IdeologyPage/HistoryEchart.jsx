import React, { Component } from 'react';
import * as echarts from 'echarts';
// import  'echarts/lib/chart/line';

class HistoryEchart extends Component {
    componentDidMount() {
        var myChart = echarts.init(document.getElementById('he'));
        
        myChart.setOption({
            title: {
                text: '古今中外算法史',
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {},
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    DataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                nameLocation: 'middle',
                boundaryGap: false,
                data: ['330 BC', '100 BC', 'AD 900', 'AD 1880', 'AD 1963']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                
                data: [520, 932, 901, 1934, 1290, 1330, 1320],
                type: 'line'
            }]       
        });
    }
    render() {
        return (
            <div>
                <div id="he" style={{ width: 600, height: 400 }}></div>
            </div>
        );
    }
}
export default HistoryEchart ;