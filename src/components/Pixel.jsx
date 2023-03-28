import { useState } from "react"

const Pixel=({selected})=>{
    const [bgcolor,setBgcolor]=useState("white");
    return(
        <div onClick={
            ()=>{
                setBgcolor(selected);
            }
        }
        
        style={{
            height:"1rem",
            width:"1rem",
            background:bgcolor
        }}  ></div>
    )
}

export default Pixel;