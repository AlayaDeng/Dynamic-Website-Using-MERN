import React, {Component} from 'react'; 

// Algorithms
import BubbleSort from '../../algorithms/BS.jsx';
import InsertionSort from '../../algorithms/IS.jsx';
import SelectionSort from '../../algorithms/SS.jsx';

// icons
import Play from '@material-ui/icons/PlayCircleOutlineRounded';
import Forward from '@material-ui/icons/SkipNextRounded';
import Backward from '@material-ui/icons/SkipPreviousRounded';
import RotateLeft from '@material-ui/icons/RotateLeft';

import Scarf from '../../components/Scarf';
import Bar from '../../components/algrx/Bar';
import Catalogue from '../../components/algrx/Catalogue';

import './Sort.css';

class Sort extends Component {
    state = {
        array: [],
        arraySteps: [],
        colorKey: [],
        colorSteps: [],
        currentStep: 0,
        count: 10,
        delay: 300,
        algorithm: 'Bubble Sort',
        timeouts: []
    };

    ALGORITHMS = {
        'Bubble Sort': BubbleSort,
        'Insertion Sort': InsertionSort,
        'Selection Sort': SelectionSort,
    };

    componentDidMount() {
        this.generateRandomArray();
    };

    generateSteps = () => {
        let array = this.state.array.slice();
        let steps = this.state.arraySteps.slice();
        let colorSteps = this.state.colorSteps.slice();

        this.ALGORITHMS[this.state.algorithm](array, 0, steps, colorSteps);

        this.setState({
        arraySteps: steps,
        colorSteps: colorSteps
        });
    };

    clearTimeouts = () => {
        this.state.timeouts.forEach((timeout) => clearTimeout(timeout));
        this.setState({
            timeouts: [],
        });
    };

    clearColorKey = () => {
        let blankKey = new Array(this.state.count).fill(0);

        this.setState({
            colorKey: blankKey,
            colorSteps: [blankKey]
        })
    }

    generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    generateRandomArray = () => {
        this.clearTimeouts();
        this.clearColorKey();
        const count = this.state.count;
        const temp = [];

        for (let i=0; i<count; i++){
            temp.push(this.generateRandomNumber(50, 200));
        }
        // console.log(temp);
        this.setState({
            array: temp,
            arraySteps: [temp],
            currentStep: 0,
        }, () =>{
            this.generateSteps();
        })
    }

    changeArray = (index, value) => {
        let arr = this.state.array;
        arr[index] = value;
        this.setState({
            array: arr,
            arraySteps: [arr],
            currentStep: 0
        }, () => {
            this.generateSteps();
        });
    }

    chooseBS = () => {
        let algorithm = 'Bubble Sort';
        this.setState({
            algorithm: algorithm,
        })
    }

    chooseIS = () => {
        let algorithm = 'Insertion Sort';
        this.setState({
            algorithm: algorithm,
        })
    }

    chooseSS = () => {
        let algorithm = 'Selection Sort';
        this.setState({
            algorithm: algorithm,
        })
    }

    previousStep = () => {
        let currentStep = this.state.currentStep;
        if (currentStep === 0) {
            return ;
        }
        currentStep -= 1;
        this.setState({
            currentStep: currentStep,
            array: this.state.arraySteps[currentStep],
            colorKey: this.state.colorSteps[currentStep]
        })
    }

    nextStep = () => {
        let currentStep = this.state.currentStep;
        if (currentStep >= this.state.arraySteps.length-1) {
            return ;
        }
        currentStep += 1;
        this.setState({
            currentStep: currentStep,
            array: this.state.arraySteps[currentStep],
            colorKey: this.state.colorSteps[currentStep]
        })
    }

    start = () => {
        let steps = this.state.arraySteps;
        let colorSteps = this.state.colorSteps;

        this.clearTimeouts();

        let timeouts = [];
        let i = 0;

        while (i < steps.length - this.state.currentStep){
            let timeout = setTimeout(() => {
                let currentStep = this.state.currentStep;
                this.setState({
                    array: steps[currentStep],
                    colorKey: colorSteps[currentStep],
                    currentStep: currentStep + 1,
                });
                timeouts.push(timeout);
            }, this.state.delay * i);
            i++;
        }
        this.setState({
            timeouts: timeouts,
        })
    }

    render() {
        let bars = this.state.array.map((value, index) => {
            return (
                <Bar 
                key={index}
                index={index}
                length={value}
                color={this.state.colorKey[index]}
                changeArray={this.changeArray}
                />
            );
        });

        let playButton;

        if (this.state.arraySteps.length === this.state.currentStep) {
            playButton = (
                <button className='controller' onClick={this.generateRandomArray}>
                <RotateLeft />
                </button>
            )
        } else {
            playButton = (
                <button className='controller' onClick={this.start}>
                <Play />
                </button>
            )
        }

        return (
            <div className='sort'>
                <div className='ctn'>
                    <Scarf text='实战示例 - 排序'/>
                </div>
                <div className='algorithm-brim'></div>
                <div className='catalogue-content'>
                    <div className='catalogue'><Catalogue /></div>
                    <div className='algorithm-content'>
                        <div className='choose'>
                            <button className='choose-BS' onClick={this.chooseBS}>Bubble Sort</button>
                            <button className='choose-IS' onClick={this.chooseIS}>Insertion Sort</button>
                            <button className='choose-SS' onClick={this.chooseSS}>Selection Sort</button>
                        </div>
                        <div>
                            <h2>{this.state.algorithm}</h2>
                        </div>
                        <div className='frame'>
                            <div className='barsDiv container card'>{bars}</div>
                        </div>
                        <div className='control-pannel'>
                            <div className='control-buttons'>
                                <button className='controller' onClick={this.previousStep}>
                                <Backward />
                                </button>
                                {playButton}
                                <button className='controller' onClick={this.nextStep}>
                                <Forward />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sort;