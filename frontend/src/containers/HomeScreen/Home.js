import Inputs from "../../components/Inputs/Inputs";
import InputInfo from "../../components/InputInfo/InputInfo";
import React, { Component } from "react";

export default class Home extends Component {

  render() {
    return (
      <div className="WrapperDiv">
          <InputInfo />  
          <Inputs />
      </div>
    );
  }
}
