import React, {Component} from "react";
import HeatMapGraph from "../../components/HeatMapGraph/HeatMapGraph";
import ScatterPlot from "../../components/ScatterPlot/ScatterPlot";
import DatasetTable from "../../components/DatasetTable/DatasetTable";
import AverageTable from "../../components/AverageTable/AverageTable";

export default class Data extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div className= "HeatMapDiv">
                    <HeatMapGraph />
                </div>
                <div className="ScatterPlot">
                    <ScatterPlot />
                </div>
                <div className="AverageTable">
                    <AverageTable />
                </div>
                <div className="DatasetTable">
                    <DatasetTable />
                    <a href="https://www.kaggle.com/imnikhilanand/heart-attack-prediction" 
                    target= "_blank" alt="Dataset Link" className="DatasetLink">DATASET SOURCE</a>
                </div>
            </div>

        );
    }

}
