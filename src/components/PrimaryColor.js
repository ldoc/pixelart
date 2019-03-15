import React,{useState} from 'react';


function toHex(rgb) {
  const hex = rgb.toString(16);
  return hex.length < 2 ? "0" + hex : hex;
};

function PrimaryColor(props){
  const {cx,cy,type,chroma} = props;

  const hexChroma = toHex(chroma);
  const fill = type == 'R' ? `#${hexChroma}0000` : type == 'G' ? `#00${hexChroma}00` : `#0000${hexChroma}`;
  return <g>
          <rect x={cx} y={cy} height="80px" width="20px" fill={fill} stroke="black"/>
          <text x={cx} y={cy} fill={'white'}>{type}</text>
         </g>
}

export default PrimaryColor;