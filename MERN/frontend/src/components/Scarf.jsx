import './Scarf.css';

const ECNULogo = new URL("../img/ECNULogo.png", import.meta.url);
const LogoRect = new URL("../img/LogoRect.png", import.meta.url);

function Scarf (props) {
    return (
        <div className='ctn'>
            <div className='scarf-group'></div>
            <div className='scarf-pagetitle'>
                <div className='pt-badge'>
                    <img src={ECNULogo} alt="" className="img-logo-ecnu"/>
                    <img src={LogoRect} alt="" className="img-logo-rect" />
                </div>
                <div className='pt-title'>
                    <p className="title-title">{props.text}</p>
                </div>
            </div>
            
        </div>
    );
}

export default Scarf;