import React from 'react';
import cityscape_illustration from '../../../app/assets/images/cityscape.png';


const SplashFooterComponent = () => {
    return(
        <footer className="credits">
          <div className="all-credits">
          <div className="about-stephanie">
              <h3> About Me </h3>
              <ul>
                <li><i className="fab fa-github"></i>
                  <a href="https://github.com/hsusteph5/YipGithub" target="_blank">Github</a>
                </li>

                <li><i className="fab fa-linkedin-in"></i>
                  <a href="https://www.linkedin.com/in/stephanie-hsu-43847b88/" target="_blank">LinkedIn</a>
                </li>
              </ul>
            </div>

            <div className="all-photo-credits">
              <h3>Projects</h3>
              <ul>
                <li><a href="https://github.com/hsusteph5/Yip"> Yip </a></li>
                <li><a href="https://github.com/NickEcton/NoPlanNeeded"> No Plan Needed </a></li>
                <li><a href="https://github.com/hsusteph5/NeonTanks"> Neon Tanks </a></li>
              </ul>
            </div>

            <div> 
              <h3>Discover</h3>
                <ul>
                  <li><p>The Local Yip</p></li>
                  <li><p>Yip Blog</p></li>
                  <li><p>Support</p></li>
                  <li><p>Yip Mobile</p></li>
                  <li><p>Developers</p></li>
                  <li><p>RSS</p></li>
                </ul>
            </div>



            <div>
              <h3>Icon Credits</h3>
                <ul>
                  <li>Site: <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
                  <li><a href="https://www.flaticon.com/authors/mynamepong" title="mynamepong">mynamepong</a></li>
                  <li><a href="https://www.freepik.com/" title="Freepik">Freepik</a></li>
                  <li><a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a></li>
                  <li>License: <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"> CC 3.0 BY</a></li>
                </ul>
            </div>
          </div>
          <img src={cityscape_illustration} alt="cityscape_illustration"></img>
      </footer>
    );
    
}

export default SplashFooterComponent;

          // <div>Icons made by <a href="https://www.flaticon.com/authors/mynamepong" title="mynamepong">mynamepong</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
          // <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
          // <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
          // <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
          