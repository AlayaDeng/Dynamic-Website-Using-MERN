import './Catalogue.css';

import { Link } from 'react-router-dom';


function Catalogue () {
    return (
        <div className='catalogueBoard'>
            <Link to='/algorithm'>
                <button className='cb-btn'>Introduction</button>
            </Link>
            <div className='cb-group'>
                <div className='cb-group-title'>Data Structure</div>
                {/* <button className='catabar-button'>Linear List</button> */}
                <Link to='/algorithm/tree'>
                    <button className='catabar-button'>Tree</button>
                </Link>
                <Link to='/algorithm/graph'>
                    <button className='catabar-button'>Graph</button>
                </Link>
                {/* <button className='catabar-button'>Addition</button> */}
            </div>
            <div className='cb-group'>
                <div className='cb-group-title'>Algorithm</div>
                <Link to='/algorithm/sort'>
                    <button className='catabar-button'>Sort</button>
                </Link>
                {/* <button className='catabar-button'>Greedy</button> */}
                <Link to='/algorithm/motionplan'>
                    <button className='catabar-button'>Motion Plan</button>
                </Link>
                {/* <button className='catabar-button'>DP</button> */}
            </div>
                
                
        </div>
    )
}

export default Catalogue;