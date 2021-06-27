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
                    layout = {{
                        title: {
                            text: "AGE AND BLOOD PRESSURE OF HIGH RISK INDIVIDUALS"
                        },
                        xaxis: {
                            title: {
                                text: "Age",
                                size: 20
                            }
                        },
                        yaxis: {
                            title: {
                                text: "Blood Pressure"
                            }
                        },
                        responsive: true,
                        autosize: true,
                        paper_bgcolor: "#000",
                        plot_bgcolor: "#D3D3D3",
                        font: {
                            color: "fff",
                        },
                        markers: {
                            color: "#fff"
                        }
                    }}
                />
            </div>
        );

    }
    
}