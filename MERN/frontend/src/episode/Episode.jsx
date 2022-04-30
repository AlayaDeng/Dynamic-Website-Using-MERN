import Text from "./Text";
import Tips from "./Tips";



function Episode ({e_id, title, compendium, imgsrc, explain}) {
    return (
        <div className="episode">
            <div className="episode-text">
                <Text 
                    title={title}
                    compendium={compendium}
                />
            </div>
            {/* <D3Graph /> */}
            <div className="episode-content">
                <div>
                    <img src={ imgsrc } alt="" style={{height: "300px"}} />
                </div>
                <div>
                    <Tips explain={explain}/>
                </div>
            </div>
        </div>
    )
}

export default Episode;