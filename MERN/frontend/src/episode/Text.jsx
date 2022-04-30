import './Text.css';

function Text({title, compendium}) {
    // const exp = '';
    // for (let i=0; i<explain.size(); i++){
    //     exp += explain[i];
    // }
    
    return (
        <div className='text-text'>
            <div className='text-title'>{title}</div>
            <div className='text-explain'>{compendium}</div>
        </div>
    )
}

export default Text;