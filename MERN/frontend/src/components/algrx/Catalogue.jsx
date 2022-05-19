import './Catalogue.css';

import { Link } from 'react-router-dom';

function Catalogue () {
    return (
        <div className='catalogueBoard'>
            <Link to='/algorithm'>
                <button className='cb-btn'>总览</button>
            </Link>
            <div className='cb-group'>
                <Link to='/algorithm/sort'>
                    <button className='catabar-button'>排序算法</button>
                </Link>
                <Link to='/algorithm/recursion'>
                    <button className='catabar-button'>递归与分治</button>
                </Link>
                <Link to='/algorithm/dp'>
                    <button className='catabar-button'>动态规划</button>
                </Link>
                <Link to='/algorithm/greedy'>
                    <button className='catabar-button'>贪心算法</button>
                </Link>
                {/* <Link to='/algorithm/flow'>
                    <button className='catabar-button'>网络流</button>
                </Link> */}
                <Link to='/algorithm/more'>
                    <button className='catabar-button'>更多</button>
                </Link>
            </div>
        </div>
    )
}

export default Catalogue;



// function Catalogue () {
//     return (
//         <div className='catalogueBoard'>
//             <Link to='/algorithm'>
//                 <button className='cb-btn'>Introduction</button>
//             </Link>
//             <div className='cb-group'>
//                 <div className='cb-group-title'>Data Structure</div>
//                 {/* <button className='catabar-button'>Linear List</button> */}
//                 <Link to='/algorithm/tree'>
//                     <button className='catabar-button'>Tree</button>
//                 </Link>
//                 <Link to='/algorithm/graph'>
//                     <button className='catabar-button'>Graph</button>
//                 </Link>
//                 {/* <button className='catabar-button'>Addition</button> */}
//             </div>
//             <div className='cb-group'>
//                 <div className='cb-group-title'>Algorithm</div>
//                 <Link to='/algorithm/sort'>
//                     <button className='catabar-button'>Sort</button>
//                 </Link>
//                 {/* <button className='catabar-button'>Greedy</button> */}
//                 <Link to='/algorithm/motionplan'>
//                     <button className='catabar-button'>Motion Plan</button>
//                 </Link>
//                 {/* <button className='catabar-button'>DP</button> */}
//             </div>
                
                
//         </div>
//     )
// }