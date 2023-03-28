import Pixel from "./Pixel";
const Rows =({width,height,selected})=>{
    let pixels=[];

    for(let i=0;i<width;i++)
    {
        pixels.push(<Pixel selected={selected}/>);
    }
    
    return(
        <>
       <div style={{display:"flex"}}>
        {pixels.map((elem,idx)=><h1>{elem}</h1>)}
       </div>
        </>
    )
}
export default Rows;