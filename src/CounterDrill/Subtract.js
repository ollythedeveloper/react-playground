import React, { Component } from 'react';

class Subtract extends Component {
    render(){
        return (
            <div className="subtractCount__button">
                <button onClick={this.props.handleSubtract}> - </button>
            </div>
        )
    }
}

export default Subtract;