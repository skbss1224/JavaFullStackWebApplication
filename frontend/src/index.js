import React from 'react'
import ReactDom from 'react-dom'
import App,{ Hello } from './App'

//render("what to show","where to show")
ReactDom.render(
    <>
    <App/>
    <Hello/>
    </>
    ,document.getElementById("root")

)