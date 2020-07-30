import React, { Component } from 'react';
import FallbackUI from './FallbackUI/FallbackUI';

export default class ErrorBoundary extends Component{
  constructor(props){
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(){
    return {hasError: true};
  }
  render(){
    if(this.state.hasError){
      return <FallbackUI/>
    }
    return this.props.children;
  }
}