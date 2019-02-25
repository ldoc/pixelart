import React from 'react';
import Button from './Button';
import { icons } from '../resources/icons';

function Menu(props){
  return [<Button name="color" px="5" py="5" icon={icons.color} dispatch={props.dispatch}/>,
          <text x="50%" y="25">{props.view}</text>]
};

export default Menu;