import React from 'react'
import {Grid, Cell } from 'react-mdl';
import krisImage from './assets/kristopher.jpg';


export const  About = () => (


<div className="about-body">
    <Grid className="about-grid">
        <Cell col={6}> 
        
        <h3> Kristopher Vala </h3>
        <img className="roundedImage" src={krisImage} alt="Kristopher" />
        <h5> Bachelor of Technology - Software Development </h5>

        </Cell>
        <Cell col={6}> 
        <h3> About </h3>

        <p> 
        <h4>Leonardo Worldwide Corporation – Junior Systems Admin (Co-Op)	<br />	  </h4>   
   September 2019 - May 2020 <br />
•	Filler <br />
•	Filler <br />
•	Filler <br />
        </p>
        
       
       <h4>  Seneca College - Information Technology Service Desk - Team Leader<br /> </h4>
        <p>   
     April 2018 - August 2018<br />
•	Responded to technical tickets and phone calls to assist clients and coworkers with technical issues.<br />
•	Installed and assisted with troubleshooting various hardware and software tools.<br />

        </p>

        <p> 
        <h4> Stardust Drive In - Supervisor<br /> </h4>  
       April 2017 - April 2018<br />
•	Supervised and ensured employees were on task and performing according to company guidelines.<br />
•	Worked in a consistently hectic and busy environment.

        </p>




        </Cell>

    </Grid>
    
    </div>
   

    
)