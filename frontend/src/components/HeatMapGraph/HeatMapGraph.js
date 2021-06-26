import React, {Component} from "react";
import Plot from 'react-plotly.js';

export default class HeatMapGraph extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            labels: ['age', 'sex', 'chestPain', 'restBp', 'chol', 'fastBs', 'restEcg', 'maxHeartRate',
                    'exerciseAngina', 'exerciseStDep', 'target'],
            zValues: {},
        }
    }

    async componentDidMount(){
        const res = await fetch('api/heatmap');
        const dataRetrieved = await res.json();
        
        this.setState((state) => {
            return {zValues: dataRetrieved.data};
        });

    }

    render() {
        
        return(
            <Plot data ={[
                {   
                    x: this.state.labels,
                    y: this.state.labels,
                    z: [
                        this.state.zValues.age,
                        this.state.zValues.sex,
                        this.state.zValues.cp,
                        this.state.zValues.trestbps,
                        this.state.zValues.chol,
                        this.state.zValues.fbs,
                        this.state.zValues.restecg,
                        this.state.zValues.thalach,
                        this.state.zValues.exang,
                        this.state.zValues.oldpeak,
                        this.state.zValues.num
                    ],
                    type: 'heatmap' 

                }
            ]} 
            layout= {{width: 900, height: 500}}
            />
        ); 
    }

}