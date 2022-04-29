import './Banner.css';

const CSLogo = new URL("../../img/CSLogo.png", import.meta.url);

function Banner() {
    return (
        <div className='banner'>
            <div className='banner-collegeLogo'>
                <img src={CSLogo} alt="" className='banner-logo-college' />
                <div className='banner-collegeName'>
                    <div className='banner-collegeName-1'>华东师范大学计算机科学与技术学院</div>
                    <div className='banner-collegeName-2'>School of Computer Science and Technology</div>
                </div>
            </div>
            <div className='banner-courseName'>
                算法设计与分析
            </div>
            <div className='banner-search'></div>
        </div>
    );
}

export default Banner;