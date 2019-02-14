import React from 'react';
import Cell from './Cell';

function Grid(props){
  const {grid:{cells,size,cellSize},dispatch} = props;
  const offsetCenter = [size[0]*cellSize / 2,size[1]*cellSize / 2];
  return cells.map((c,i) => <Cell key={i} x={c.x} y={c.y} color={c.color ? `#${c.color}` : null} size={cellSize} offsetCenter = {offsetCenter} dispatch={dispatch}/>)
};

export default Grid;