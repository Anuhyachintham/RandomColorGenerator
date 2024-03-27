import React, { useEffect } from 'react'
import { useState} from 'react'


const Randomcolor = () => {
const[typeOfColor,setTypeOfColor]=useState("hex")
const[color,setColor]=useState("#000000")

const randomColorUtility=(length)=>{
 return Math.floor(Math.random()*length)
}
 

const handleHexColor=()=>{
const Hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let HexCode="#";
for(let i=0;i<6;i++){ 
    HexCode+=Hex[randomColorUtility(Hex.length)]
    // console.log(HexCode);
}
    setColor(HexCode);


}
const handleRgbColor=()=>{
const r=randomColorUtility(256);
const g=randomColorUtility(256);
const b=randomColorUtility(256);
setColor(`rgb(${r},${g},${b})`)
}

useEffect(()=>{
    if(typeOfColor==="rgb"){
        handleRgbColor()
    }
    else{
        handleHexColor()
    }
},[typeOfColor]);
  return (
    <div style={{height:'100vh',width:'100vw',backgroundColor:color}}>
        
       <button onClick={()=>setTypeOfColor('hex')}>Create Hex Color</button>
       <button onClick={()=>setTypeOfColor('rgb')}>Create Rgb Color</button>
       <button onClick={typeOfColor==="hex"?handleHexColor:handleRgbColor}>Generate Random Color</button>
       <div style={{display:'flex',justifyContent:'center',alignItems:'center',color:"#ffffff",fontSize:"60px",marginTop:"50px"}}>
        <h3>{typeOfColor==="rgb"?"Rgb color":"Hex color"}</h3>
        <h1>{color}</h1>
       </div>
        </div>
  )
}

export default Randomcolor