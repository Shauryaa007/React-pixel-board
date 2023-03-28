const Layout=(props)=>{

    const {children}=props;
    return (
        <div style={{height:"100%",background:"black",color:"white",padding:"10px" ,display:"flex" , alignItems:"center",flexDirection:"column",justifyContent:"center"}}>
            {children}
        </div>
    )
}

export default Layout;