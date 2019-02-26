import React,{useState} from 'react';
import PrimaryColor from './PrimaryColor';

function ColorPicker(props){
  const {color,setColor} = useState("000000");

  return  <svg viewBox="-50 -50 100 100">
            <PrimaryColor type="R" cx="0px" cy="-15px"/>
            <PrimaryColor type="G" cx="-15px" cy="15px"/>
            <PrimaryColor type="B" cx="15px"  cy="15px"/>
          </svg>
};

export default ColorPicker;