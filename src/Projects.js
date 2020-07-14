import React from 'react'
import {Grid, Cell } from 'react-mdl';
import { About } from './About';

export const  Projects = () => (
<div className="projects-body">
<h1> Projects </h1>


<Grid className="about-grid">
        <Cell col={6}> 
        
        <div className="project-a">
        <h3>
        CalFit - Mobile Nutrition app
        </h3>
        <h6>
        •	Created a nutrition/calorie tracker which utilized the https://www.nutritionix.com/ API for the nutritional information that powers the app.
        <br/>
        •	Created using Xamarin and C#.
        </h6>
        <h3> PlaceholderLink</h3>
        </div>

        <div className="project-b">
        <h3> Mobile Quiz Game</h3>
        <h6>
        •Created a game where users must answer a series of questions.
        <br/>
        •	The users final score was based off of the number of correct answers and the number of hints and/or cheats the user used.
        <br/>
        •	Created using Java and Android studio.
             </h6>
        <h3> PlaceholderLink</h3>

        </div>


        </Cell>
        <Cell col={6}> 

        <div className="project-b">
        <h3> Space Invaders iOS Game</h3>
        <h6>
        •Utilized Swift to develop a space invaders type game.
        <br/>
        •Users could create their profile, play through various levels and then save their high score into the leaderboards.
        </h6>
        <h3> PlaceholderLink</h3>

        </div>

        <div className="project-a">
        <h3>
        StatTrak – Leaderboard website       </h3>
        <h6>
        •	Utilized ASP.Net MVC, HTML, MySQL, CSS and hosted on Microsoft Azure.        <br/>
        •	Website allows users to create an account and upload their personal statistics in various video games.
                </h6>
        <h3> PlaceholderLink</h3>
        </div>

        </Cell>

    </Grid>



</div>




    
)