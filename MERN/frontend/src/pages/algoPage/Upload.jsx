
import Scarf from "../../components/Scarf";
import Catalogue from "../../components/algrx/Catalogue";

function Upload () {
    return (
        <div className="upload">
            <div className='ctn'>
                <Scarf text='实战示例 - 更多'/>
            </div>
            <div className='algorithm-brim'></div>
            <div className="catalogue-content">
                <div className='catalogue'><Catalogue /></div>
                <div className='algorithm-content'>
                    更多
                </div>
            </div>
        </div>
    )
}

export default Upload;