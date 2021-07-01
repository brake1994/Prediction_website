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
            return ("Bad news! You are at increased risk of heart disease!" +
                    " It isn't too late to improve your heart health though, check out the additional"+
                     " resources to start making changes today.");
        }
        return ("Great News! You are at low risk of heart disease!" + 
                " Check out the additional resources to find out how to keep you heart healthy.");
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
                        <br></br>
                        <em>
                        Disclaimer: This app is not meant to replace a professional testing. If you are experiencing
                         chest pain see a physician immediately.
                        </em>
                    </p>
                </div>
                
                <div className="R1BoxTwo">
                    <LifestyleBox />
                </div>
                
            </div>
        );
    }
    
}