import React, {Component} from "react";
import {withRouter} from 'react-router-dom';

class Inputs extends Component {

  constructor(props){
    super(props);
    this.state = {
      age: 25,
      sex: 0,
      chestPain: 1,
      restBp: 100,
      chol: 100,
      fastBs: 0,
      restEcg: 0,
      maxHeartRate: 150,
      exerciseAngina: 0, 
      exerciseStDep: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value
    });
  }

  handleSubmit(event){
    event.preventDefault();

    fetch("https://heart-health-predict.herokuapp.com/api/create-prediction",{
      method: "POST",
      headers: {"Content-Type": "application/json","Accept": "application/json"},
      body: JSON.stringify({
        age: this.state.age,
        sex: this.state.sex,
        chestPain: this.state.chestPain,
        restBp: this.state.restBp,
        chol: this.state.chol,
        fastBs: this.state.fastBs,
        restEcg: this.state.restEcg,
        maxHeartRate: this.state.maxHeartRate,
        exerciseAngina: this.state.exerciseAngina,
        exerciseStDep: this.state.exerciseStDep
      })
    }).then((resp) => resp.json())
      .then((resp) => this.props.history.push({
        pathname: '/results',
        results: resp.result,
        accuracy: resp.accuracy
      }));
  }

  render(){
  return (
    <form id='submitForm' onSubmit={this.handleSubmit}>
        <div className="Inputs">
            <div>
              <label>Age: </label>
              <input type="number" name="age" onChange={this.handleChange} />
            </div>
            
            <div>
              <label>Sex: </label>
              <select name="sex" defaultValue="1" onChange={this.handleChange}>
                <option value="1">Male</option>
                <option value="0">Female</option>
              </select>
            </div>
            
            <div>
              <label>Chest Pain:  </label>
              <select name="chestPain" defaultValue="1" onChange={this.handleChange}>
                <option value="1">Typical Angina</option>
                <option value="2">Atypical Angina</option>
                <option value="3">Non-anginal pain</option>
                <option value="4">Asymptomatic</option>
              </select>
            </div>

            <div>
              <label>Resting Blood Pressure (mm Hg):  </label>
              <input type="number" name="restBp" onChange={this.handleChange}/>
            </div>

            <div>
              <label>Cholestoral (mg/dl): </label>
              <input type="number" name="chol" onChange={this.handleChange}/>
            </div>

            <div>
              <label>Fasting Blood sugar higher than 120 mg/dl: </label>
              <select name="fastBs" onChange={this.handleChange}>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>

            <div>
              <label>Resting ECG: </label>
              <select name="restEcg" onChange={this.handleChange}>
                <option value="0">Normal</option>
                <option value="1">ST-T wave abnormality</option>
                <option value="2">Left ventricular hypertrophy</option>
              </select>
            </div>

            <div>
              <label>Maximum Heart Rate:  </label>
              <input type="number" name="maxHeartRate" onChange={this.handleChange}/>
            </div>

            <div>
              <label>Exercise-induced Angina: </label>
              <select name="exerciseAngina" onChange={this.handleChange}>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>

            <div>
              <label>Exercise-induced ST depression:  </label>
              <input type= "number" name="exerciseStDep" onChange={this.handleChange} />
              
            </div>

            <div>
              <button className="Submit" form="submitForm" type="submit">Submit</button>         
            </div>

        </div>
      </form>
      );
  }
}

export default withRouter(Inputs);