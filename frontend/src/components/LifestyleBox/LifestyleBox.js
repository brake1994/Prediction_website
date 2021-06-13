import React, {Component} from "react";
import {FitnessCenter, LocalDining, Hotel, Mood} from '@material-ui/icons';
import {Icon, IconButton} from "@material-ui/core";


export default class LifestyleBox extends Component {
    
    render(){
        return (
            <div className="LifestyleBox">
                <div>
                    <strong>Lifestyle Changes To Improve Heart Health</strong>
                    <p className="IconInfo">
                        * Click on the icons to learn more *
                    </p>
                </div>

                <div>
                    <IconButton href="https://www.cdc.gov/physicalactivity/index.html" target="_blank">
                        <FitnessCenter alt="Fitness Icon" />
                    </IconButton>
                    <p>
                        Regular Exercise
                    </p>
                </div>

                <div>
                    <IconButton href="https://www.cdc.gov/nutrition/" target="_blank">
                        <LocalDining />
                    </IconButton>
                    <p>
                        Healthy Diet
                    </p>
                </div>

                <div>
                    <IconButton href="https://www.cdc.gov/sleep/index.html" target="_blank">
                        <Hotel />
                    </IconButton>
                    <p>
                        Sleep
                    </p>
                </div>

                <div>
                    <IconButton href="https://www.cdc.gov/mentalhealth/learn/index.htm" target="_blank">
                        <Mood />
                    </IconButton>
                    <p>
                        Mental Health/ Reduce Stress
                    </p>
                </div>
            </div>

        );
    }

}
