import React from 'react';
// import Split from './composition/Split';
import './App.css';
import CounterApp from './CounterDrill/CounterApp';
import Add from './CounterDrill/Add';
import Subtract from './CounterDrill/Subtract';
// import Tooltip from './composition/Tooltip';
// import TheDate from './state/TheDate';
// import Counter from './state/Counter';
// import Tabs from './state/Tabs'
// import Accordion from './state-drills/Accordion'
// import DemonymApp from './demonymapp/denomymApp';

//make 2 tooltips here and another inside the App directly
// const firstTooltip = (
//   <Tooltip color='hotpink' message= 'tooltip message'>
//     ipsum
//   </Tooltip>
// )

// const secondTooltip= (
//   <Tooltip color='#126BCC' message= 'another tooltip message'>
//     officiis
//   </Tooltip>
// )
// const tabsProp = [
//   {name: 'First tab',
//    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.'},
//   {name: 'Second tab',
//    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
//   {name: 'Third tab',
//     content:'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.'},
// ];

// const sections = [
//   {
//     title: 'Section 1',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//   },
//   {
//     title: 'Section 2',
//     content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
//   },
//   {
//     title: 'Section 3',
//     content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
//   },
// ]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  addCount = () => {
    const addCount = this.state.count +1
    this.setState({
      count: addCount
    })
  }

  subtractCount = () => {
    const subtractCount = this.state.count -1
    this.setState({
      count: subtractCount
    })
  }

  render(){
   return <div className="App">
     {/* <Accordion sections={sections} /> */}
     {/* <DemonymApp/> */}
     <Add
        handleAdd={this.addCount}/>
     <CounterApp count={this.state.count} />
     <Subtract
        handleSubtract={this.subtractCount}/>
     </div>
  }
}

export default App;