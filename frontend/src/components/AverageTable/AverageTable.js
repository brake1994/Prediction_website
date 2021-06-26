import React, {cloneElement, Component} from 'react';
import Plot from 'react-plotly.js';

export default class AverageTable extends Component {

    constructor(props){
        super(props);

        this.state = {
            lowRisk: {},
            highRisk: {},
        }
    }

    async componentDidMount(){
        const res = await fetch('api/averagetable');
        const dataRetrieved = await res.json();

        this.setState((state) => {
            return {lowRisk: dataRetrieved.lowRisk, highRisk: dataRetrieved.highRisk};
        });

    }

    createColumns() {
        var highRisk = [];
        var lowRisk = [];
        var i = 0;

        Object.entries(this.state).map((key) =>{
            if( key[0] === 'lowRisk'){
                lowRisk = key[1];
            }
            else{
                highRisk = key[1];
            }
        });
        return [lowRisk, highRisk];
    }

    render() {
        return (
            <div>
                <Plot data = {[
                        {
                            type: 'table',
                            header: {
                                values: ["Attributes", "Low Risk", "High Risk"],
                                align: "center",
                                fill: {color: "black"},
                                font: {size:12, family:"Arial", color:"white"}
                            },
                            cells: {
                                values: [['Age', 'Blood Pressure', 'Cholesterol', 'Max Heart Rate'], 
                                this.createColumns()[0], this.createColumns()[1]]
                            }
                        }
                    ]}
                
                />
            </div>
        );
    }

}