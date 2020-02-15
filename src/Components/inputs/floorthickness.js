import React from 'react';

const FloorThickness = (props) => {

    let maxThickness = 15 + 1;
    let selectInches = 11 + 1;
    let selectFractions = 16;

    return (
        <div>
            <label>Floor Thickness</label>
            <select defaultValue={props.floorft} onChange={props.changefloorft}>
                {Array.from(Array(maxThickness), (e, i) => {
                    return ( <option key={i*12}>{i +"'"}</option> )
                })}
            </select>
            <select defaultValue={props.floorin} onChange={props.changefloorin}>
                {Array.from(Array(selectInches), (e, i) => {
                    return ( <option key={i}>{i +'"'}</option> )
                })}
            </select>
            <select defaultValue={props.floorfr} onChange={props.changefloorfr}>
                {Array.from(Array(selectFractions), (e, i) => {
                    return ( <option key={i * 0.0625}>{i + "/16"}</option> )
                })}
            </select>
        </div>  
    )
}

export default FloorThickness