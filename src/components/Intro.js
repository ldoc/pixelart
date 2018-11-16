import React from 'react';
import Spinner from './Spinner';

function Intro(){

  const stlDiv = {
    display: 'grid',
    width: '100%',
    height: '100vh',
    textAlign:'center',
    backgroundColor: 'lightgray',
    opacity: '0.7'
  }

  const stlSvg = {
    margin:'auto',
    transform: 'scale(3)'
  }

  const bSize = 20;
  const mark = bSize * 2 + bSize/10

  return  <div style={stlDiv}>
            <svg style={stlSvg} height={mark} width={mark}>
              <Spinner bSize={bSize}/>
            </svg>
          </div>;

}

export default Intro;