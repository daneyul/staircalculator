import React from 'react';
import { Stage, Layer, Line } from 'react-konva';

const Stair = (props) => {

  let windowWidth = window.innerWidth * 0.65;
  let move = [windowWidth/2,100];

  let totalRun = parseInt(props.totalRunft) + parseInt(props.totalRunin) + parseFloat(props.totalRunfr);
  let totalRise = parseInt(props.totalRiseft) + parseInt(props.totalRisein) + parseFloat(props.totalRisefr);

  let idealRun = parseFloat(props.idealRunin) + parseFloat(props.idealRunfr);
  let idealRise = parseFloat(props.idealRisein) + parseFloat(props.idealRisefr);

  let xCount = parseInt(totalRun/idealRun);
  let yCount = parseInt(totalRise/idealRise);

  let landing = 36;

  let stringerA = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRun / idealRise));
  let stringerB = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRise / idealRun));

  let coordinates = [];

  let floorThickness = (parseFloat(props.floorft) + parseFloat(props.floorin) + parseFloat(props.floorfr));


  if (props.boolean === true){
    for (let i=0; i<xCount; i++){
      coordinates.push( (totalRise)-(idealRun*i), idealRise*i, (totalRise)-(idealRun*(i+1)), idealRise*i, (totalRise)-(idealRun*(i+1)), (idealRise*(i+1)) )
    }
    coordinates.push( (coordinates[coordinates.length-2]+stringerB), coordinates[coordinates.length-1], coordinates[0], stringerA, coordinates[0], floorThickness, (coordinates[0]+landing), floorThickness, (coordinates[0]+landing), 0)
  } else if (props.boolean === false){
    for (let i=0; i<yCount; i++){
      coordinates.push( (totalRun)-(idealRun*i), idealRise*i, (totalRun)-(idealRun*(i+1)), idealRise*i, (totalRun)-(idealRun*(i+1)), (idealRise*(i+1)) )
    }
    coordinates.push( (coordinates[coordinates.length-2]+stringerB), coordinates[coordinates.length-1], coordinates[0], stringerA, coordinates[0], floorThickness, (coordinates[0]+landing), floorThickness, (coordinates[0]+landing), 0)
  }

  let lengthH = parseFloat(props.headroomLength);

  let headroomPts = [ (coordinates[coordinates.length-12]-(idealRun*3)), floorThickness, (coordinates[coordinates.length-12]-(idealRun*3)), 0, coordinates[coordinates.length-12]-idealRun + lengthH, 0, coordinates[coordinates.length-12]-idealRun + lengthH, floorThickness ];

  let headroomDelta = coordinates[3] - (coordinates[coordinates.length-12]-idealRun + lengthH);

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
            closed='true'
          />
        <Line
            x={move[0]}
            y={move[1]}
            points={headroomPts}
            stroke="black"
            strokeWidth={2}
            lineCap='sqare'
            lineJoin='sqare'
            closed='true'
          />
        </Layer>
      </Stage>
  )
}

export default Stair