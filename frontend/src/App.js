import React from "react"
import {Sasi} from "./manoj"
import {Mani} from "./manoj"
import {Component2} from "./manoj"
import {Component4, Component5, Component6, New} from "./sasi"
function App()
{
    
    return(
    <>
        <h1>react basic function</h1>
        <Sasi/>
        <Mani/>
        <Component2/>
        <New/>
        <Component4/>
        <Component5/>
        <Component6/>
    </>
    )
}
function Hello()
{
    return(<p>hooks</p>)
   
}

export {Hello}
export default App;