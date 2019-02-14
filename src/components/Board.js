import React, {useRef} from 'react';
import Grid from './Grid';

function Board(props){
  const {dispatch} = props;
  return  <svg viewBox={props.view}>
            <Grid {...props} dispatch={dispatch}/>
          </svg>;
};

export default Board;