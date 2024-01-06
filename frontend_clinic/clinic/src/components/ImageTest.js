import React from 'react';
import img1 from './imagess/rubik.jpg'
// import img1 from '/home/stepan/programming/java_projects/projects/github/educational/HealthConnect/frontend_client/client/src/images/rubik.jpg'
// import img1 from 'client/src/images/rubik.jpg'



function Image1(){
    return (
        <div>
            <img  src={img1} alt='' width={50} height={50}/>
        </div>
        
    );
};

export default Image1;