import React, {useState} from 'react';

function App(){
    let [clickCounter, increaseClicks ] = useState(Number(window.localStorage.getItem('counter'))); // 0);


    // add clicks function and set click counter 
    function addClicks() {   
        let clicks = 0;
        clicks = clickCounter + 1;
        window.localStorage.setItem('counter', clickCounter);
        increaseClicks(clicks);         
    }

    return (
        <div>
            <button id="clickBtn" onClick={addClicks}>Click me</button>
            <p id="countDisplay"> {clickCounter} </p>
        </div> 
    );
}
export default App;