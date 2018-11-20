import React, { Component } from 'react';
import './App.css';
class App extends Component {
    render() {
        return (
            <div className="App">
                nijnjinjinu
                {getTestArray(5).map(element=>{
                    return (<div>{element}</div>)
                })}
            </div>
        );
    }
}

function getTestArray (count) {
    let rows = [];
    for (let i = 0; i < count; i++) {
        rows.push('Labas' + (i+1))
    }
    return rows;
}

export default App;







