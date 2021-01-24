import React from 'react';


class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        who: 'world'
        }
    }

    render() {
        return (
        <div className='Hello'>
        <p>Hello, {this.state.who}!</p>

        <button onClick={() => this.setState({who: 'world'})}>world</button>
        <button onClick={() => this.setState({who: 'friend'})}>friend</button>
        <button onClick={() => this.setState({who: 'React'})}>React</button>
            
        </div>
        )
    }
}

export default HelloWorld;