import React,{useState} from 'react';
import PrimaryColor from './PrimaryColor';

function ColorPicker(props){
  const [color,setColor] = useState([20,200,100]);
  return  <svg viewBox="-50 -50 100 100">
            <PrimaryColor type="R" cx={-50} cy={-40} chroma={color[0]} ontouchstart={() => alert('aa')}/>
            <PrimaryColor type="G" cx={-20} cy={-40} chroma={color[1]}/>
            <PrimaryColor type="B" cx={10}  cy={-40} chroma={color[2]}/>
          </svg>
};

export default ColorPicker;