import React from 'react';

function Container(props){

  const stl = {
    width: '100%',
    height: '100%'
  }

  return  <svg style={stl}>
            {props.children}
          </svg>;

}

export default Container;