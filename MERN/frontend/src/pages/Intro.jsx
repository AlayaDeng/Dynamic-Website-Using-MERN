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
    width: 120px;
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
    width: 120px;
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
            <Scarf text='课程网站' />
        </div>
        <div className='intro-brim'>
            <Banner />
        </div>
        <div className='intro-slideShow'>
            <SlideShow />
        </div>
        <div className='intro-channel-container'>
            <div className='intro-channel-item'>&nbsp;</div>
            <div className='intro-channel-item'>
                <TabsUnstyled defaultValue={0}>
                    <div className='channels'>
                        <TabsList>
                            <Tab>课程大纲</Tab>
                            <Tab>课程内容</Tab>
                            <Tab>研讨会</Tab>
                        </TabsList>
                    </div>
                    <TabPanel value={0}>
                        <div className='channel-board'>
                            <div className='channel-board-main'>
                                <div><a href={pdf_2021} download='教学进度表2021'>教学进度表-2021</a></div>
                                <div><a href={pdf_2020} download='教学大纲2020'>教学大纲-2020</a></div>
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/courseoutline' ><div>更多</div></Link>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={1}>
                        <div className='channel-board'>
                            <div className='channel-board-main'>
                                <div>课程内容1</div>
                                <div>课程内容2</div>
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/coursecontent' ><div>更多</div></Link>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={2}>
                        <div className='channel-board'>
                            <div className='channel-board-main'>
                                <div onClick={this.openPage1}>数字化转型与数字孪生”校庆…</div>
                                <div onClick={this.openPage5}>计算机学院举办校庆特邀报告…</div>
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/seminar' ><div>更多</div></Link>
                            </div>
                        </div>
                    </TabPanel>
                </TabsUnstyled>
            </div>
            <div className='intro-channel-item'>
                <TabsUnstyled defaultValue={0}>
                    <div className='channel-line'>
                        <TabsList>
                            <TabUn>实战示例</TabUn>
                        </TabsList>
                    </div>
                    <TabPanel value={0}>
                        <div className='channel-board'>
                            <div className='channel-board-mmain'>
                                <div>排序</div>
                                <div>动态规划</div>
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/algorithm' ><div>更多</div></Link>
                            </div>
                        </div>
                    </TabPanel>
                </TabsUnstyled>
            </div>
            <div className='intro-channel-item'>&nbsp;</div>
            <div className='intro-channel-item'>
                <TabsUnstyled defaultValue={1}>
                    <div className='channel-line'>
                        <TabsList>
                            <Tab>团队介绍</Tab>
                            <Tab>课程思政</Tab>
                        </TabsList>
                    </div>
                    <TabPanel value={0}>
                        <div className='channel-board'>
                            <div className='channel-board-main'>
                                <div>团队介绍1</div>
                                <div>团队介绍2</div>
                            </div>
                            <div className='channel-board-more'>更多</div>
                        </div>
                    </TabPanel>
                    <TabPanel value={1}>
                        <div className='channel-board'>
                            <div className='channel-board-main'>
                                <div>卓越任务</div>
                                <div>算法史</div>
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/ideology' ><div>更多</div></Link>
                            </div>
                        </div>
                    </TabPanel>
                </TabsUnstyled>
            </div>
            <div className='intro-channel-item'>
                <TabsUnstyled defaultValue={0}>
                    <div className='channel-line'>
                        <TabsList>
                            <TabUn>相关资源</TabUn>
                        </TabsList>
                    </div>
                    <TabPanel value={0}>
                        <div className='channel-board'>
                            <div className='channel-board-mmain'>
                                <div onClick={this.openEOJ}>ECNU Online Judge</div>
                                <div onClick={this.openDSVisu}>Data Structure</div>
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/resource' ><div>更多</div></Link>
                            </div>
                        </div>
                    </TabPanel>
                </TabsUnstyled>
            </div>
        </div>

{/* 
        <div className='intro-channel'>
            <div className='intro-channel-left'>
                <div className='channel-left-top'>
                <TabsUnstyled defaultValue={0}>
                    <div className='channel-line'>
                        <TabsList>
                            <Tab>课程大纲</Tab>
                            <Tab>课程内容</Tab>
                            <Tab>研讨会</Tab>
                        </TabsList>
                        
                    </div>
                    <TabPanel value={0}>
                        <div className='channel-board'>
                            <div className='channel-board-main'>
                                <div><a href={pdf_2021} download='教学进度表2021'>教学进度表-2021</a></div>
                                <div><a href={pdf_2020} download='教学大纲2020'>教学大纲-2020</a></div>
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/courseoutline' ><div>更多</div></Link>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={1}>
                        <div className='channel-board'>
                            <div className='channel-board-main'>
                                <div>课程内容1</div>
                                <div>课程内容2</div>
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/coursecontent' ><div>更多</div></Link>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={2}>
                        <div className='channel-board'>
                            <div className='channel-board-main'>
                                <div onClick={this.openPage1}>数字化转型与数字孪生”校庆…</div>
                                <div onClick={this.openPage5}>计算机学院举办校庆特邀报告…</div>
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/seminar' ><div>更多</div></Link>
                            </div>
                        </div>
                    </TabPanel>
                </TabsUnstyled>
                </div>
                <div className='channel-left-bottom'>
                <TabsUnstyled defaultValue={1}>
                    <div className='channel-line'>
                        <TabsList>
                            <Tab>团队介绍</Tab>
                            <Tab>课程思政</Tab>
                        </TabsList>
                    </div>
                    <TabPanel value={0}>
                        <div className='channel-board'>
                            <div className='channel-board-main'>
                                <div>团队介绍1</div>
                                <div>团队介绍2</div>
                            </div>
                            <div className='channel-board-more'>更多</div>
                        </div>
                    </TabPanel>
                    <TabPanel value={1}>
                        <div className='channel-board'>
                            <div className='channel-board-main'>
                                <div>卓越任务</div>
                                <div>算法史</div>
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/ideology' ><div>更多</div></Link>
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
                            <TabUn>实战示例</TabUn>
                        </TabsList>
                    </div>
                    <TabPanel value={0}>
                        <div className='channel-board'>
                            <div className='channel-board-mmain'>
                                <div>排序</div>
                                <div>动态规划</div>
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/algorithm' ><div>更多</div></Link>
                            </div>
                        </div>
                    </TabPanel>
                </TabsUnstyled>
                </div>
                <div className='channel-right-bottom'>
                <TabsUnstyled defaultValue={0}>
                    <div className='channel-line'>
                        <TabsList>
                            <TabUn>相关资源</TabUn>
                        </TabsList>
                    </div>
                    <TabPanel value={0}>
                        <div className='channel-board'>
                            <div className='channel-board-mmain'>
                                <div onClick={this.openEOJ}>ECNU Online Judge</div>
                                <div onClick={this.openDSVisu}>Data Structure</div>
                            </div>
                            <div className='channel-board-more'>
                                <Link to='/resource' ><div>更多</div></Link>
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