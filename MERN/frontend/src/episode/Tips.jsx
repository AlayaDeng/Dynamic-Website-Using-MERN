import './Tips.css';

function Tips({explain}){
    return (
        <div className='tips'>
            <div>{explain}</div>
        </div>
    )
}

export default Tips;