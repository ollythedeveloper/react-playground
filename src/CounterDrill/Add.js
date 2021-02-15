import React, { Component } from 'react';

class Add extends Component {
     
    render(){
        return (
            <div className="addCount__button">
                <button onClick={this.props.handleAdd}> + </button>
            </div>
        )
    }
}

export default Add;