import React, {useRef} from 'react';
import Grid from './Grid';

function Board(props){
  const {dispatch} = props;
  console.log(props.angle)
  return  <svg viewBox={props.view}>
            <g transform={`rotate(${props.angle})`}>
              <Grid {...props} dispatch={dispatch}/>
            </g>
          </svg>;
};

export default Board;