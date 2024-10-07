import React from 'react';
import './Home.css'; // Import styling for the Home page
import Image from '../images/asset_1_shadow.png';
const Home = () => {
    return (
        <div className="home-container">
            <div className="text-content">
                <h1>Elevate Your <br /> 
                    <span className='bussiness'> 
                        <span style={{color: '#194759'}}>Business</span>
                          with <br />Expert
                    </span>
                    <span style={{color:'#194759'}}>Web Solutions.</span>
                </h1>
                <p>Innovative Web Solutions for Your Business</p>
            </div>
            <div className="image-content">
                <img src={Image} alt="Web Solutions" />
            </div>
        </div>
    );
};

export default Home;
