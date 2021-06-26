import React, {Component} from 'react';
import Plot from 'react-plotly.js';

export default class ScatterPlot extends Component {

    constructor(props){
        super(props);

        this.state = {
            data:{}
        }
    }

    async componentDidMount() {
        const res = await fetch('api/scatterplot');
        const retrievedData = await res.json();

        this.setState((state) =>{
            return {data: retrievedData};
        });
    }

    render() {

        return (
            <div>
                <Plot 
                    data = {[
                        {
                            x: this.state.data.age,
                            y: this.state.data.restbp,
                            mode: 'markers',
                            type: 'scatter'
                        }
                    ]}
                    layout = {{width:400, height:400}}
                />
            </div>
        );

    }
    
}