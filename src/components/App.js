import React, {useReducer} from 'react';
import Container from './Container';
import Board from './Board';

const initialState = {
  appName: 'PixelArt',
  selectedColor: '550055',
  grid: {
    size: [32,32],
    cellSize: 50,
    cells: generateGrid([32,32])}

}

function generateGrid(size){
  let grid = [];
  for(let i = 0; i < size[0]; i++){
    for(let j = 0; j < size[1]; j++){
      grid[i+j*size[0]] = {x:i,y:j};
    }
  }
  return grid;
}

function reducer(state,action){
  switch (action.type) {
    case 'test':
      return {...state,appName:'test'}
    case 'setCell':
      return {...state,grid:{...state.grid,cells: state.grid.cells.map(c => (c.x == action.x && c.y == action.y) ? {...c,color:state.selectedColor}  : c)}}
    default:
      return state;
  }
}

function App(){
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Container {...state} dispatch={dispatch}/>;
}

export default App;