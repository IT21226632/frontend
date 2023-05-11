import React from 'react';
import backgroundImage from '../Images/background3.jpg';
import ServicesImage1 from '../Images/team-4.jpg';
import Testgif1 from '../Images/testgif1.gif';
import  Welcome from '../Images/welcome2.gif';
import ExpertImage from '../Images/expert1.jpg';
import '../HomePage.css';
import AllQuotations from './listQuotationAdmin';
import HomePageQuotations from './HomePageQuotations';

export default function HomePage(){
    return (
        <div className="Home-container">
            <div className="main-img">
                <img src={backgroundImage} alt="Background"></img>
            </div>
            <div className = "Home-rel">
            <div className='Home-button1'>Get a Quote</div>
            
            <div className = "Home-c-grid1">
                <div className = "Home-left1">
                <img src={Welcome} alt="Background"></img>
                < p id = "leftpara">Welcome to YAMINI,</p>
                <div className='Home-buttonleft'>Sign Up</div>
                <div className='Home-buttonleft2'>Login</div>
                </div>

                <div className = "Home-right1">
                        <div className='Home-p1'><p id = "Home-five">5 years experience</p></div>
                        
                        <p id = "Home-p2">Our cleaning service company offers top-quality cleaning 
                        services for homes and businesses. From regular cleaning to deep cleaning, 
                        our team provides a spotless and comfortable environment for our clients</p>

                        <div className='Home-button2'>Learn More</div>

                        
                </div>

            </div>

            <p id = "Home-p3">Our Services
            
            <br></br>
            <br></br>

            <big><big>We Provide Services <br></br>Worldwide</big></big>
            </p>

            <div className = "Home-learnmore">

                <div className='Home-c-grid2'>

                    <div className='Home-c'>
                        <img src={ServicesImage1} alt="Background"></img>

                        <p id = "Home-Services">Apartment Cleaning</p>

                        <div className='Home-button3'>Learn More</div>

                    </div>

                    <div className='Home-c'>
                        <img src={ServicesImage1} alt="Background"></img>

                        <p id = "Home-Services">Apartment Cleaning</p>

                        <div className='Home-button3'>Learn More</div>
                    </div>

                    <div className='Home-c'>
                        <img src={Testgif1} alt="Background"></img>

                        <p id = "Home-Services">Apartment Cleaning</p>

                        <div className='Home-button3'>Learn More</div>
                    </div>

                    <div className='Home-c'>
                        <img src={ServicesImage1} alt="Background"></img>

                        <p id = "Home-Services">Apartment Cleaning</p>

                        <div className='Home-button3'>Learn More</div>

                    </div>

                </div>
            </div>

            </div>

            <div class = "home-no_extra">
                <p id = "n_extra">No Extra Hidden <br></br>
                Charges</p>

            </div>

            <div class = "home-standard" >
            <div style={{ overflow: 'auto' }}>
                <HomePageQuotations/>
                </div>
            </div>

            <div class = "home-c-grid3">

                <div class = "home-left3">

                    <p id = "home-choose_us">Why Choose Us,</p>

                    <p id = "home-Expert">Expert Cleaners <br></br>and World Class<br></br> Services </p>



                    <p id = "home-intro">Our cleaning service company boasts expert cleaners and 
                    world-class services. We take pride in providing exceptional cleaning 
                    services for homes and businesses, ensuring a spotless and comfortable 
                    environment for our clients.</p>


                    <div className='home-intro-button3'>Learn More</div>
                </div>

                <div class = "home-right3">

                    <div class = "home-right-c-grid">

                        <div class = "home-right-c">
                        <img src={ExpertImage} alt="Background"></img>

                        </div>

                        <div class = "home-right-c">

                            <p id = "home-right-c-text">
                                Expert Cleaning
                            </p>
                        </div>

                        <div class = "home-right-c">
                        <img src={ExpertImage} alt="Background"></img>

                        </div>

                        <div class = "home-right-c">

                            <p id = "home-right-c-text">
                                Reasanable Prices
                            </p>
                        </div>

                        <div class = "home-right-c">
                        <img src={ExpertImage} alt="Background"></img>

                        </div>

                        <div class = "home-right-c">

                            <p id = "home-right-c-text">
                                Quick & Best Services
                            </p>
                        </div>

                    </div>
                </div>

                
            </div>

            <div class = "home-no_extra">
                <p id = "n_extra">No Extra Hidden <br></br>
                Charges</p>

            </div>

            <div class = "home-standard">

                hdgeygjsdhdyeghsgdyeh jdjdhskdh <br></br>
                hdbdhdgssdc<br></br>
                hdgeygjsdhdyeghsgdyeh jdjdhskdh <br></br>
                hdbdhdgssdc<br></br>
                hdgeygjsdhdyeghsgdyeh jdjdhskdh <br></br>
                hdbdhdgssdc<br></br>
                hdgeygjsdhdyeghsgdyeh jdjdhskdh <br></br>
                hdbdhdgssdc<br></br>
                hdgeygjsdhdyeghsgdyeh jdjdhskdh <br></br>
                hdbdhdgssdc<br></br>
            </div>
            
        </div>
    )
}