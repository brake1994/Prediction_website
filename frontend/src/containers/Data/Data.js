import React, {Component} from "react";
import HeatMapGraph from "../../components/HeatMapGraph/HeatMapGraph";

export default class Data extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <HeatMapGraph />
            </div>

        );
    }

}
