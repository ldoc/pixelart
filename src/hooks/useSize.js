import React, {useState,useEffect} from 'react';

function useSize (){
  const [size,setSize] = useState(getSize());

  useEffect(() => {
    document.body.onresize = function(e){
      setSize(getSize())
    }
  },[]);

  function getSize(){
    return {w:window.innerWidth, h:window.innerHeight};
  }

  return size;

}

export default useSize;