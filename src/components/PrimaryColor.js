import React,{useState} from 'react';

function PrimaryColor(props){
  const {cx,cy,type} = props;
  const fill = type == 'R' ? 'red' : type == 'G' ? 'green' : 'blue';
  return <circle cx={cx} cy={cy} r="30px" opacity="0.5" fill={fill} stroke="black"/>
}

export default PrimaryColor;