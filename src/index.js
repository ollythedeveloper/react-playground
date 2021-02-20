import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import App from './paltrows-power-toes/App'
import AppLang from './lang-context/AppLang';
import './index.css';
// import HelloWorld from './state-drills/HelloWorld';
// import Bomb from './state-drills/Bomb';
// import RouletteGun from './state-drills/RouletteGun';


ReactDOM.render(
    <AppLang />, 
    document.getElementById('root')
    );
//ReactDOM.render(<HelloWorld />, document.getElementById('root'));
//ReactDOM.render(<Bomb/> , document.getElementById('root'));
//ReactDOM.render(<RouletteGun/>, document.getElementById('root'));