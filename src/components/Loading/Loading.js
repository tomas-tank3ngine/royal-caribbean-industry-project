import './Loading.scss';
import blueWhale from "../../assets/images/icons/blueWhaleIcon.png";


function Loading(){
    return(
        <main>
            <h2 className="loading-message">Please wait while we personalize a few cruises for you!</h2>
            <div className='loading-container'>
                <h1 className="loading-container__heading">
                    Loading
                    <div className='loading-container__icons'>
                        <img src={blueWhale}/>
                        <img src={blueWhale}/>
                        <img src={blueWhale}/>
                    </div>
                </h1>

            </div>
        </main>
    )

}

export default Loading;