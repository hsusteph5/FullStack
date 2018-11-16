import React from 'react';
import cityscape_illustration from '../../../app/assets/images/cityscape.png';


const SplashFooterComponent = () => {
    return(
        <footer className="credits">
          <div className="all-credits">
            <div className="all-photo-credits">
              <h3>About</h3>
              <ul>
                <li><p> About Yip </p></li>
                <li><p>Careers</p></li>
                <li><p>Press</p></li>
                <li><p>Investor Relations</p></li>
                <li><p>Content Guidelines</p></li>
                <li><p>Terms of Service</p></li>
                <li><p>Privacy Policy</p></li>
                <li><p>Ad Choice</p></li>
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
              <h3>Yip for Business Owners</h3>
                <ul>
                  <li><p>Claim your Business Page</p></li>
                  <li><p>Advertise for Yip</p></li>
                  <li><p>Yip Reservations</p></li>
                  <li><p>Yip Wifi</p></li>
                  <li><p>Yip Nowait</p></li>
                  <li><p>Business Sucess Stories</p></li>
                  <li><p>Business Support</p></li>
                  <li><p>Yip Blog for Business Owners</p></li>
                </ul>
            </div>

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
          </div>

          <img src={cityscape_illustration} alt="cityscape_illustration"></img>

        </footer>
    );
    
}

export default SplashFooterComponent;