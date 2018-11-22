import React from 'react';
import iphone  from '../../../app/assets/images/software/smartphone.svg';
import android  from '../../../app/assets/images/software/android.svg';


const SplashSoftware = () => {
    return (
        <div className="splash-software">
            <h2>Yip Mobile Apps</h2>
            <div className="splash-software-container">
                <div className="splash-software-index">
                    <p>Apple</p>
                    <img src={iphone}></img>
                </div>

                <div className="splash-software-index">
                    <p>Android</p>
                    <img src={android}></img>
                </div> 
            </div>
        </div>
    );
}

export default SplashSoftware;