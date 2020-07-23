import React, { Component } from 'react';

const element = 
    React.createElement(
        'div', 
        null, 
        'This element has been created by React.createElement');

export default class CreateElement extends Component{
    render(){
        return element;
    }
}