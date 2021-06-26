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
                <HeatMapGraph />
                <ScatterPlot />
                <AverageTable />
                <DatasetTable />
            </div>

        );
    }

}
