import React, { Component } from 'react';

import './Intro.css';

import Scarf from '../components/Scarf';
import Banner from '../components/IntroPage/Banner';
import SlideShow from '../components/IntroPage/SlideShow';

import pdf_2021 from '../pdfs/outline-2021.pdf';
import pdf_2020 from '../pdfs/outline-2020.pdf';

import { Link } from 'react-router-dom';

import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';


const Tab = styled(TabUnstyled)`
    width: 180px;
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

const TabUn = styled(TabUnstyled)`
    width: 180px;
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
`;

const TabPanelLeft = styled(TabPanelUnstyled)`
    width: 540px
    font-family: IBM Plex Sans, sans-serif;
    font-size: 1.2rem;
`;

const TabsListLeft = styled(TabsListUnstyled)`
    width: 540px;
    border-radius: 8px;
    margin: 6px 1px 6px 5px;
    display: flex;
    
`;

const TabPanelRight = styled(TabPanelUnstyled)`
    width: 400px
    font-family: IBM Plex Sans, sans-serif;
    font-size: 1.2rem;
`;

const TabsListRight = styled(TabsListUnstyled)`
    width: 480px;
    border-radius: 8px;
    margin: 6px 1px 6px 5px;
    display: flex;
    
`;

class Intro extends Component {
    openPage1 = () => {
        window.open("http://www.cs.ecnu.edu.cn/de/e7/c24535a384743/pagem.htm")
    }
    openPage5 = () => {
        window.open("http://www.cs.ecnu.edu.cn/18/98/c24535a333976/page.htm")
    }
    openEOJ = () => {
        window.open("https://acm.ecnu.edu.cn/")
    }
    openDSVisu = () => {
        window.open("https://www.cs.usfca.edu/~galles/visualization/Algorithms.html")
    }

    newNav = (nav) => {
        console.log(nav);
    }
    

    render() {
    return (
    <div className='intro'>
        <div className='ctn'>
            <Scarf text='????????????' />
        </div>
        <div className='intro-brim'>
            <Banner />
        </div>
        <div className='intro-slideShow'>
            <SlideShow />
        </div>
        <div className='intro-channel-container'>
            <div className='intro-channel-item'>&nbsp;</div>
            <div className='intro-channel-item-left'>
                <TabsUnstyled defaultValue={0}>
                    <div className='channels'>
                        <TabsListLeft>
                            <Tab>????????????</Tab>
                            <Tab>????????????</Tab>
                            <Tab>?????????</Tab>
                        </TabsListLeft>
                    </div>
                    <TabPanelLeft value={0}>
                        <div className='channel-board'>
                            <div className='channel-board-main'>
                                <div><a className='a-css' href={pdf_2021} download='???????????????2021'>???????????????-2021</a></div>
                                <hr className='vir-border' />
                                <div><a className='a-css' href={pdf_2020} download='????????????2020'>????????????-2020</a></div>
                                <hr className='vir-border' />
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/courseoutline' ><div className='more'>??????</div></Link>
                            </div>
                        </div>
                    </TabPanelLeft>
                    <TabPanelLeft value={1}>
                        <div className='channel-board'>
                            <div className='channel-board-main'>
                                <div>????????????1</div>
                                <hr className='vir-border' />
                                <div>????????????2</div>
                                <hr className='vir-border' />
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/coursecontent' ><div className='more'>??????</div></Link>
                            </div>
                        </div>
                    </TabPanelLeft>
                    <TabPanelLeft value={2}>
                        <div className='channel-board'>
                            <div className='channel-board-main'>
                                <div onClick={this.openPage1}>??????????????????????????????????????????</div>
                                <hr className='vir-border' />
                                <div onClick={this.openPage5}>??????????????????????????????????????????</div>
                                <hr className='vir-border' />
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/seminar' ><div className='more'>??????</div></Link>
                            </div>
                        </div>
                    </TabPanelLeft>
                </TabsUnstyled>
            </div>
            <div className='intro-channel-item-right'>
                <TabsUnstyled defaultValue={0}>
                    <div className='channel-line'>
                        <TabsListRight>
                            <TabUn>????????????</TabUn>
                        </TabsListRight>
                    </div>
                    <TabPanelRight value={0}>
                        <div className='channel-board'>
                            <div className='channel-board-mmain'>
                                <div>??????</div>
                                <hr className='vir-border' />
                                <div>????????????</div>
                                <hr className='vir-border' />
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/algorithm' ><div className='more'>??????</div></Link>
                            </div>
                        </div>
                    </TabPanelRight>
                </TabsUnstyled>
            </div>
            <div className='intro-channel-item'>&nbsp;</div>
            <div className='intro-channel-item'>&nbsp;</div>
            <div className='intro-channel-item-left'>
                <TabsUnstyled defaultValue={1}>
                    <div className='channel-line'>
                        <TabsListLeft>
                            <Tab>????????????</Tab>
                            <Tab>????????????</Tab>
                        </TabsListLeft>
                    </div>
                    <TabPanelLeft value={0}>
                        <div className='channel-board'>
                            <div className='channel-board-main'>
                                <div>????????????1</div>
                                <hr className='vir-border' />
                                <div>????????????2</div>
                                <hr className='vir-border' />
                            </div>
                            <div className='channel-board-more'>
                                <div className='more'>??????</div>
                            </div>
                        </div>
                    </TabPanelLeft>
                    <TabPanelLeft value={1}>
                        <div className='channel-board'>
                            <div className='channel-board-main'>
                                <div>????????????</div>
                                <hr className='vir-border' />
                                <div>?????????</div>
                                <hr className='vir-border' />
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/ideology' ><div>??????</div></Link>
                            </div>
                        </div>
                    </TabPanelLeft>
                </TabsUnstyled>
            </div>
            <div className='intro-channel-item-right'>
                <TabsUnstyled defaultValue={0}>
                    <div className='channel-line'>
                        <TabsListRight>
                            <TabUn>????????????</TabUn>
                        </TabsListRight>
                    </div>
                    <TabPanelRight value={0}>
                        <div className='channel-board'>
                            <div className='channel-board-mmain'>
                                <div onClick={this.openEOJ}>ECNU Online Judge</div>
                                <hr className='vir-border' />
                                <div onClick={this.openDSVisu}>Data Structure</div>
                                <hr className='vir-border' />
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/resource' ><div>??????</div></Link>
                            </div>
                        </div>
                    </TabPanelRight>
                </TabsUnstyled>
            </div>
            <div className='intro-channel-item'>&nbsp;</div>
        </div>

{/* 
        <div className='intro-channel'>
            <div className='intro-channel-left'>
                <div className='channel-left-top'>
                <TabsUnstyled defaultValue={0}>
                    <div className='channel-line'>
                        <TabsList>
                            <Tab>????????????</Tab>
                            <Tab>????????????</Tab>
                            <Tab>?????????</Tab>
                        </TabsList>
                        
                    </div>
                    <TabPanel value={0}>
                        <div className='channel-board'>
                            <div className='channel-board-main'>
                                <div><a href={pdf_2021} download='???????????????2021'>???????????????-2021</a></div>
                                <div><a href={pdf_2020} download='????????????2020'>????????????-2020</a></div>
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/courseoutline' ><div>??????</div></Link>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={1}>
                        <div className='channel-board'>
                            <div className='channel-board-main'>
                                <div>????????????1</div>
                                <div>????????????2</div>
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/coursecontent' ><div>??????</div></Link>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={2}>
                        <div className='channel-board'>
                            <div className='channel-board-main'>
                                <div onClick={this.openPage1}>??????????????????????????????????????????</div>
                                <div onClick={this.openPage5}>??????????????????????????????????????????</div>
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/seminar' ><div>??????</div></Link>
                            </div>
                        </div>
                    </TabPanel>
                </TabsUnstyled>
                </div>
                <div className='channel-left-bottom'>
                <TabsUnstyled defaultValue={1}>
                    <div className='channel-line'>
                        <TabsList>
                            <Tab>????????????</Tab>
                            <Tab>????????????</Tab>
                        </TabsList>
                    </div>
                    <TabPanel value={0}>
                        <div className='channel-board'>
                            <div className='channel-board-main'>
                                <div>????????????1</div>
                                <div>????????????2</div>
                            </div>
                            <div className='channel-board-more'>??????</div>
                        </div>
                    </TabPanel>
                    <TabPanel value={1}>
                        <div className='channel-board'>
                            <div className='channel-board-main'>
                                <div>????????????</div>
                                <div>?????????</div>
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/ideology' ><div>??????</div></Link>
                            </div>
                        </div>
                    </TabPanel>
                </TabsUnstyled>
                </div>
            </div>
            <div className='intro-channel-right'>
                <div className='channel-right-top'>
                <TabsUnstyled defaultValue={0}>
                    <div className='channel-line'>
                        <TabsList>
                            <TabUn>????????????</TabUn>
                        </TabsList>
                    </div>
                    <TabPanel value={0}>
                        <div className='channel-board'>
                            <div className='channel-board-mmain'>
                                <div>??????</div>
                                <div>????????????</div>
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/algorithm' ><div>??????</div></Link>
                            </div>
                        </div>
                    </TabPanel>
                </TabsUnstyled>
                </div>
                <div className='channel-right-bottom'>
                <TabsUnstyled defaultValue={0}>
                    <div className='channel-line'>
                        <TabsList>
                            <TabUn>????????????</TabUn>
                        </TabsList>
                    </div>
                    <TabPanel value={0}>
                        <div className='channel-board'>
                            <div className='channel-board-mmain'>
                                <div onClick={this.openEOJ}>ECNU Online Judge</div>
                                <div onClick={this.openDSVisu}>Data Structure</div>
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/resource' ><div>??????</div></Link>
                            </div>
                        </div>
                    </TabPanel>
                </TabsUnstyled>
                </div>
            </div>
        </div> */}
    </div>
    );
    }
}

export default Intro;