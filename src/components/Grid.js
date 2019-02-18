import React from 'react';
import Cell from './Cell';

function Grid(props){
  const {grid: {cells, size, cellSize}, view, dispatch} = props;
  const offsetCenter = [size[0] * cellSize / 2, size[1] * cellSize / 2];

  const v = view.split(' ').map((v) => parseFloat(v));
  const cellCache = cellSize * 2;

  return cells.map((c,i) => {
    const px = c.x * cellSize - offsetCenter[0];
    const py = c.y * cellSize - offsetCenter[1];
    const showCellX = ((px > v[0] - cellCache || (px + cellSize) > v[0] - cellCache) && (px  < (v[0] + v[2] + cellCache) || (px + cellSize) < (v[0] + v[2] + cellCache) ));
    const showCellY = ((py > v[1] - cellCache || (py + cellSize) > v[1] - cellCache) && (py  < (v[1] + v[3] + cellCache) || (py + cellSize) < (v[1] + v[3] + cellCache) ));
    const showCell = showCellX && showCellY;
    return showCell ? <Cell key={i} x={c.x} y={c.y} px={px} py={py} color={c.color ? `#${c.color}` : null} size={cellSize} offsetCenter={offsetCenter} dispatch={dispatch}/> : null
  })
};

export default Grid;