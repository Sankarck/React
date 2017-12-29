import React, { Component } from 'react';
import { connect } from 'react-redux';
import {add_1} from '../actions/sample';
import ReducersConnect from '../reducers/combine_reducer';


class Calc extends Component {
    constructor(props){
        super(props);
        this.state={value:'' };

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value)
       this.setState({value: event.target.value});
        
      }
   
    handleSubmit(event){    
        console.log(this.state.value) 
       event.preventDefault();    
       this.props.add_1(this.state.value);      
    }


    render()
    {   
        return(
            <div>
                <label>
                   Enter value:
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.value}/>
                </label>
                <textarea value={this.props.value} />
                <button onClick={this.handleSubmit}> ADD 1 </button>
            </div>
        );
    }
} 
function mapStateToProps(state) {0.
    // console.log(state.test)
    return{
        value:state.add_1,
    }
}
export default connect(mapStateToProps,{add_1})(Calc); 