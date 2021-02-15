import React, { Component } from 'react';

class Add extends Component {

    constructor(props) {
        super(props)
        this.state = {
        count: this.props.count
        }
    }

    // handleButtonClick= () => {
    //     console.log('props in handleButtonClick', this.props)
    //     console.log('state in handleButtonClick', this.state)
    //     const newCount = this.state.count +1
    //     this.setState({
    //         count: newCount
    //     })
    // }

    addCount = () => {
        const addCount = this.state.count +1
        this.setState({
          count: addCount
        })
    }
     
    render(){
        // const count = this.props.count

        // addCount = () => {
        //     const addCount = this.countNow +1
        //     this.setState({
        //       count: addCount
        //     })
        //   }

        return (
            <div className="addCount__button">
                <button onClick={e => this.addCount}> + </button>
            </div>
        )
    }
}

export default Add;