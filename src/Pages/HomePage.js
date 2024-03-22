import React from 'react';
import homePageData from '../DataFiles/HomePageData.js'
import '../CSS/HomePage.css';

function HomePage() {
    return (
        <div className="homePageBody">
            {homePageData.map((section, index) => (
                <div key={index} className="homePageSection">
                    <h3 className='homePageTitle'>{section.title}</h3>
                    <p className='homePageDescription'>
                        {section.description.split('\n').map((point, pointIndex) => (
                            <p key={pointIndex}>{point.trim()}</p>
                        ))}
                    </p>
                    <br></br>
                </div>
            ))}
            <h3 className='homePageDescription'><b>© 2023 Technical Projects Club - CSU Chico. All rights reserved.</b></h3>
        </div>
    )
}

export default HomePage;