import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import DiceBag from './components/DiceBag';

// const App = () => {
//     return (
//         <h3>Hello, World!</h3>
//     )
// }

const App = () => (
    <div>
        <h1>Welcome to my Dice Game!</h1>
        <DiceBag 
            label="Wes' Dice"
        />
        {/* <DiceBag
            label="Mike's Dice" 
            dice={[2,4,8,10]}
        /> */}
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
