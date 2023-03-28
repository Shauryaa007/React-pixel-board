import Layout from "./components/Layout";
import "./styles.css";
import { useState } from "react";
import Editor from "./components/Editor";
import { CirclePicker } from 'react-color';


const App = () => {

  const [width,setWidth]=useState(16);
  const [height,setHeight]=useState(16);
  const [hide,setHide]=useState(false);
  const [selected,setSelected]=useState("#f44336");
  

  return (
    <>
    <Layout>
     {!hide?
      
      (<div style={{border:"2px solid red",padding:"10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"10px"}}>
        <h1>WhiteBoaed Generator</h1>
        <input type="number" placeholder="Height" onChange={(e)=>{setHeight(e.target.value);}}/>
        <input type="number" placeholder="Width"onChange={(e)=>{setWidth(e.target.value);}}/>
        <input type="submit" style={{padding:"4px",cursor:"pointer"}} onClick={()=>{setHide(!hide);}}/>
  
      </div>)
      
      :

     ( <>

     <Editor height={height} width={width} selected={selected} />     
     <CirclePicker onChangeComplete={(color)=>{setSelected(color.hex)}}/>

     <div style={{display:"flex" ,gap:"50px", margin:"10px"}}>
     <button  style={{padding:"4px",cursor:"pointer"}} onClick={()=>{setSelected("white");}}>Eraser</button>
     <button style={{padding:"4px",cursor:"pointer"}} onClick={()=>{setHide(!hide);}}>Back</button>
     </div>

     </>)
     }
    </Layout>

    
    </>
  );
};
export default App;