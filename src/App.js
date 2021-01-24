import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import Tabs from './state/Tabs'

//make 2 tooltips here and another inside the App directly
const firstTooltip = (
  <Tooltip color='hotpink' message= 'tooltip message'>
    ipsum
  </Tooltip>
)

const secondTooltip= (
  <Tooltip color='#126BCC' message= 'another tooltip message'>
    officiis
  </Tooltip>
)
const tabsProp = [
  {name: 'First tab',
   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.'},
  {name: 'Second tab',
   content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
  {name: 'Third tab',
    contnet:'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.'},
];

class App extends React.Component {
  render(){
   return <div>
     <Tabs tabs={tabsProp} />
     </div>
  }
}

export default App;