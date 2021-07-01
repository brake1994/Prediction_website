import React, {Component} from "react";

class InputInfo extends Component {
    
    render(){
    return (
        <div className="InputInfoBox">
           <strong>Additional Info on Attributes</strong>
            <ul className="InfoList">
                <li><strong>Age:</strong> Age in years</li>
                <li><strong>Sex:</strong> Gender</li>
                <li><strong>Chest Pain:</strong>
                    <ol className="ChestPainList">
                        <li><em>Typical angina:</em> Cardiac pain</li>
                        <li><em>Atypical angina:</em> Muscular pain</li>
                        <li><em>Non-anginal Pain:</em> Non-specific pain</li>
                        <li><em>Asymptomatic:</em> No pain</li>
                    </ol>                
                </li>
                <li><strong>Resting Blood Pressure:</strong> Normal blood pressure</li>
                <li><strong>Cholestoral:</strong> Cholestoral lab result</li>
                <li><strong>Fasting blood sugar:</strong> Glucose lab result</li>
                <li><strong>Resting ECG:</strong>
                    <ol className="EcgList">
                        <li><em>Normal:</em> Normal ecg pattern</li>
                        <li><em>ST-T wave abnormality:</em> Irregular ecg pattern</li>
                        <li><em>Left venticular hypertrophy:</em> Enlarged heart</li>
                    </ol>
                </li>
                <li><strong>Maximum Heart Rate:</strong> Stress test maximum heart rate achieved (Healthy range: 220 - age)</li>
                <li><strong>Exercise-induced Angina:</strong> Chest pain during movement</li>
                <li><strong>Exercise-induced ST Depression:</strong> Irregular ecg pattern during stress test measured in mm (healthy range: 0)</li>
            </ul>
            
        </div>
    );
    }
}

export default InputInfo;