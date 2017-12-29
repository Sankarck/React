import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Welcome extends Component{

    // constructor(props){
    //     super(props);
    //     this.Welcome = this.Welcome.bind(this);
    // }
    componentDidMount()
    {
        console.log("Yes mounted");
    }

    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
    }
    
    export default Welcome;
    