import Rows from "./Rows";
import React, { useRef } from 'react';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
const Editor =({width,height,selected})=>{
    const drawingref= useRef();
    let rows=[];

    for(let i=0;i<height;i++)
    {
        rows.push(<Rows height={height} width={width} selected={selected}/>);
    }
    
    return(
        <>
        <h1>Pixel WhiteBoard</h1>
       <div ref={drawingref}>
        {rows.map((elem,idx)=><h1>{elem}</h1>)}
       </div>
       {/* <button style={{margin:"10px"}} onClick={() => exportComponentAsPNG(drawingref)}>
         Export
       </button> */}

       
       <div style={{display:"flex",gap:"10px",margin:"10px"}} >
       <h4>Export As:</h4>
       <button onClick={() => {exportComponentAsPNG(drawingref)}}>PNG</button>
       <button  onClick={() => {exportComponentAsJPEG(drawingref)}}>JPEG</button>
       <button  onClick={() => {exportComponentAsPDF(drawingref)}}>PDF</button>

       </div>
       
  
        </>
    )
}
export default Editor;