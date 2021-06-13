import Inputs from "../../components/Inputs/Inputs";
import InputInfo from "../../components/InputInfo/InputInfo";
import React, { Component } from "react";

export default class Home extends Component {

  render() {
    return (
      <div>
        <div>
          <div className="WrapperDiv">
            <div className="InputInfo">
              <InputInfo />
            </div>
            <div className="HomeInputs">
              <Inputs />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
