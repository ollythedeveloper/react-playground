import React, { Component } from 'react';

class Subtract extends Component {
    render(){
        return (
            <div className="subtractCount__button">
                <button onClick={e => this.subtractCount}> - </button>
            </div>
        )
    }
}

export default Subtract;