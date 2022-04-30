import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import d3 from 'd3';
// import _ from 'lodash';
// import cx from 'classnames';

// import './PlotExplanation.css';
// import './PlotExplanation.styl';
require('./PlotExplanation.styl');

export default class PlotExplanation extends Component {
    static propTypes = {
        explanation: PropTypes.array.isRequired
    };

    render() {
        let { explanation } = this.props;

        return (
            <div className='PlotExplained'>
                <h2>Algorithm Output</h2>
                <ul className='pe-exp'>
                    {explanation.map((line, id) => <li key={`line-${id}`}>{line}</li>)}
                </ul>
            </div>
        );
    }
};