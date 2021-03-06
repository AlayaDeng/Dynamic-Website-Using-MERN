import { Component } from 'react';
import './Ideology.css';

import Scarf from '../components/Scarf';
// import CataTabs from '../components/IdeologyPage/CataTabs';
import CelebrityCloud from '../components/IdeologyPage/CelebrityCloud';

import AlgorithmCloud from '../components/IdeologyPage/AlgorithmCloud';
// import AnnumEchart from '../components/IdeologyPage/AnnumEchart';
// import HistoryEchart from '../components/IdeologyPage/HistoryEchart';
import HistoryLine from '../components/IdeologyPage/HistoryLine';
import AlgoApplication from '../components/IdeologyPage/AlgoApplication';

import { useState } from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function CataTabs() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
                className='ideology-tabs'
            >
                <Tab label="????????????" {...a11yProps(0)} />
                <Tab label="?????????" {...a11yProps(1)} />
                <Tab label="????????????" {...a11yProps(2)} />
                <Tab label="????????????" {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <CelebrityCloud />
                {/* <AnnumEchart /> */}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {/* <HistoryEchart /> */}
                <HistoryLine />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <AlgorithmCloud />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <h2>????????????????????????</h2>
                <AlgoApplication />
            </TabPanel>
        </Box>
    )
}

class Ideology extends Component{
    
    render(){
        return (
            <div className='ideology'>
                <div className='ctn'>
                    <Scarf text='????????????' />
                </div>
                <div className='ideology-content'>
                    <div className='ideology-catalogue'>
                        <CataTabs />
                    </div>
                </div>
            </div>
        )
    }
}

export default Ideology;