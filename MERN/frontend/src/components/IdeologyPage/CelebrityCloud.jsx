import React from 'react';
import ReactWordcloud from 'react-wordcloud';

import BoardTips from '../../episode/board/BoardTips';

import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

import './CelebrityCloud.css';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

const Ancient = [
    {
        text: '祖冲之',
        value: 17,
    },
    {
        text: '刘徽',
        value: 17,
    },
    {
        text: '祖暅',
        value: 17,
    },
    {
        text: '贾宪',
        value: 17,
    },
    {
        text: '商高',
        value: 17,
    },
    {
        text: '赵爽',
        value: 17,
    },
    {
        text: '沈括',
        value: 17,
    },
    {
        text: '陈子',
        value: 17,
    },
    {
        text: '杨辉',
        value: 17,
    },
    {
        text: '秦九韶',
        value: 17,
    },
    {
        text: '朱世杰',
        value: 17,
    },
    {
        text: '徐光启',
        value: 17,
    },
    {
        text: '李善兰',
        value: 17,
    },
    {
        text: '墨子',
        value: 17,
    }
];

const Contemp = [
    {
        text: '陈省身',
        value: 17,
    },
    {
        text: '华罗庚',
        value: 17,
    },
    {
        text: '陈景润',
        value: 17,
    },
    {
        text: '苏步青',
        value: 17,
    },
    {
        text: '陈建功',
        value: 17,
    },
    {
        text: '吴文俊',
        value: 17,
    },
]


const TabCg = styled(TabUnstyled)`
    width: 320px;
    font-family: IBM Plex Sans, sans-serif;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: normal;
    background-color: #9D9497;
    padding: 12px 16px;
    margin: 6px 6px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: rgba(106, 24, 44, 0.4);
    }

    &.${tabUnstyledClasses.selected} {
        background-color: #6A182C;
    }

    &.${buttonUnstyledClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const TabPanel = styled(TabPanelUnstyled)`
    width: 420px
    font-family: IBM Plex Sans, sans-serif;
    font-size: 1.2rem;
`;

const TabsList = styled(TabsListUnstyled)`
    width: 420px;
    border-radius: 8px;
    margin: 6px 1px 6px 5px;
    display: flex;
    
`;


function CelebrityCloud() {
    return (
        <div>
            <TabsUnstyled defaultValue={0}>
                <TabsList>
                    <TabCg>中国古代数学家</TabCg>
                    <TabCg>中国当代数学家</TabCg>
                </TabsList>
                <TabPanel value={0} className='cc-content'>
                    <div style={{ width:400, height:400 }}>
                        <ReactWordcloud words={Ancient} />
                    </div>
                    <BoardTips />
                </TabPanel>
                <TabPanel value={1} className='cc-content'>
                    <div style={{ width:400, height:400 }}>
                        <ReactWordcloud words={Contemp} />
                    </div>
                </TabPanel>
            </TabsUnstyled>
        </div>
    )
}

export default CelebrityCloud;