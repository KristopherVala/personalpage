import React from 'react';
import {Jumbotron as Jumbo, Container } from 'react-bootstrap';
import skylineImage from '../assets/torontoSkyline.jpg';


const Styles = {
container: {
    backgroundImage: `url(${skylineImage})`, backgroundsize: 'cover', overflow:'hidden', backgroundRepeat :'no-repeat', backgroundPosition: 'center'

}
};

export const JumboHome = () =>(
    <Jumbo fluid classname="jumbo" style={Styles.container}>
    <div className="overlay">
    <Container>
        
    </Container> 
     </div>
    </Jumbo>

)