import React from "react";

export const New=()=>{
    return(
    <ul>
        <li>Hello</li>
        <li>sasi</li>
    </ul>
    )
}
export const Component4=()=>{
    return(
        <>
        <button type="button"
        onclick="document.getElementById('demo').innerHTML = Date()">
        Click me to display Date and Time.</button>
        
        <p id="demo"></p>
        </>
    )
}
export const Component5=()=>{
    
    return(
    <ul>
        <li>Hello</li>
        <li>sasi</li>
    </ul>
    )
}
export const Component6=()=>{
    const yet={
        border: '4px',
        borderColor: 'black',
        borderStyle: 'double'
    }

    const imgsty={
        width:'2000px',
        height:'700px',
        borderRadius:'5px',
        boxShadow:'10px 10px 10px black'
    }

    const own={
        fontSize:'60px',
        fontFamily:'Monotype Corsiva'
    }
    
        
    return(
        <>
        <p style={{color:'blue',backgroundColor:'green',
        textTransform:'uppercase'}}> 
        Hello there! 
        </p>
        <hr color="blue"/>
        <p style={own}>sasi</p>
        <h1>BOOTcamp</h1>
        <ol style={yet}>
            <li>React</li><li>Spring boot</li><li>Hibernate</li>
            <li>JUnit</li><li>Mockito</li>
            <li>Jenkins</li>
        </ol>
        
        <img style={imgsty} src="images/sasi1.jpg"/>
        </>
    )
}
