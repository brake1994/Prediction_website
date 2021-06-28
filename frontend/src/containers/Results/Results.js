import React, {Component} from "react";
import LifestyleBox from "../../components/LifestyleBox/LifestyleBox";

export default class Results extends Component {
    constructor(props){
        super(props);
        this.state = {
            results: 0,
            accuracy: 0
        }
        this.resultsMessage = this.resultsMessage.bind(this);
        this.generateResult = this.generateResult.bind(this);
    }

    componentDidMount() {
        if(this.props.location.results !== undefined){
            this.setState({results: this.props.location.results[0],
                accuracy: this.props.location.accuracy});
        }
        else{
            this.props.history.push({
                pathname:"/"
            })
        }
    }

    generateResult() {
        if(this.state.results === 1){
            return("High Risk");
        }
        return ("Low Risk");
    }
    
    resultsMessage(){
        if(this.state.results === 1){
            return ("Bad news!");
        }
        return ("Good news!");
    }

    render(){

        return (
            <div className="ResultOne">
                <div className="R1BoxOne">
                    <p className="FirstLines">
                    <strong>Accuracy:</strong> {this.state.accuracy * 100}
                    <br/>
                    <strong>Results:</strong> {this.generateResult()}
                    </p>

                    <br /> 
                    <p className="AboutResults" >
                        {this.resultsMessage()}
                    </p>
                </div>
                
                <div className="R1BoxTwo">
                    <LifestyleBox />
                </div>
                
            </div>
        );
    }
    
}