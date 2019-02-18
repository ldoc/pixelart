import React from 'react';
import Button from './Button';

function Menu(props){
  return [<Button/>,
          <text x="50%" y="25">{props.view}</text>]
};

export default Menu;