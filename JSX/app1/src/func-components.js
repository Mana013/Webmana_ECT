<<<<<<< HEAD
import React, {Component} from "react";
 
 export function Header(){
    const aStyle = {
        display:'inline-block',
        color:'blue',
        margin:'7px',
        textDecoration:'none'  
    }
    return (
        <div style={{backgroundColor:'#ccc'}}>
            <a href="" style={aStyle}>Home</a> |&nbsp;
            <a href="" style={aStyle}>React</a> |&nbsp;
            <a href="" style={aStyle}>React Native</a>
        </div>
    )
 }
 export function Content(){
    return(
        <div style={{textAlign:'center'}}>
            <h2>Hello <br/>React & React Native</h2>
            <br/><br/><br/>
        </div>
    )
 }
 export const Footer = () => {
    return (
        <div style={{textAlign:'center'}}>
            &copy;{new Date().getFullYear()} All rigths reserved
        </div>
    )
 }
=======
import React from 'react'
export function Header(){
    const aStyle = {
        display: 'inline-block',
        color:'blue',
        margin: '7px',
        textDecoration:'none'
    }
    return(
        <div style={{textAlign:'center'}}>
            <a href="" style={aStyle}>Home</a> |&nbsp;
            <a href="" style={aStyle}>Home</a> |&nbsp;
            <a href="" style={aStyle}>Home</a>
        </div>
    )
}
export function Content(){
    return(
        <div style={{textAlign:'center'}}>
            <h2>Hello<br/>React & React Native</h2>
            <br/><br/><br/>
        </div>
    )
}
export const Footer = () => {
    return(
        <div style={{textAlign:'center'}}>
            &copy;{new Date().getFullYear()} All right reserved
        </div>
    )
}
>>>>>>> 4036d508687bcbb69e354b70d1b213031195c230
