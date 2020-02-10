import React from 'react';
import { Stage, Layer, Line } from 'react-konva';

const Stair = (props) => {

  const start = 0;

  let windowWidth = window.innerWidth * 0.65;
  let move = [windowWidth/2,100];

  let totalRun = parseInt(props.totalRunft) + parseInt(props.totalRunin) + parseFloat(props.totalRunfr);
  let totalRise = parseInt(props.totalRiseft) + parseInt(props.totalRisein) + parseFloat(props.totalRisefr);

  let idealRun = parseFloat(props.idealRunin) + parseFloat(props.idealRunfr);
  let idealRise = parseFloat(props.idealRisein) + parseFloat(props.idealRisefr);

  let xCount = parseInt(totalRun/idealRun);
  let yCount = parseInt(totalRise/idealRise);
  let coordinates = [];


  if (props.boolean === true){
    for (let i=0; i<xCount; i++){
      coordinates.push( (totalRise)-(idealRun*i), idealRise*i, (totalRise)-(idealRun*(i+1)), idealRise*i, (totalRise)-(idealRun*(i+1)), (idealRise*(i+1)) )
    }} else if (props.boolean === false){
    for (let i=0; i<yCount; i++){
      coordinates.push( (totalRun)-(idealRun*i), idealRise*i, (totalRun)-(idealRun*(i+1)), idealRise*i, (totalRun)-(idealRun*(i+1)), (idealRise*(i+1)) )
    }
  }

  return (
    <Stage width={windowWidth} height={window.innerHeight}>
        <Layer>
          <Line
            x={move[0]}
            y={move[1]}
            points={coordinates}
            stroke="black"
            strokeWidth={2}
            lineCap='sqare'
            lineJoin='sqare'
          />
        </Layer>
      </Stage>
  )
}

export default Stair