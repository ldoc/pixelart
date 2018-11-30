import React, {useReducer} from 'react';
import Container from './Container';
import Board from './Board';

const initialState = {
  appName: 'PixelArt'
}

function reducer(state,action){
  switch (action.type) {
    case 'test':
      return {...state,appName:'test'}
    default:
      return state;
  }
}

function App(){
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Container>
          <Board/>
         </Container>;
}

export default App;