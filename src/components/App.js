import React, {useReducer} from 'react';

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
  return <div onClick={() => dispatch({type:'test'})}>{state.appName}</div>;
}

export default App;