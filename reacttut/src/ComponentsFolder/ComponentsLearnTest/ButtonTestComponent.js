import { useState } from 'react'

export const ButtonTestComponent = () => {
    var [clickedVar, setClickedVar] = useState(0);
    function setVar() {
        setClickedVar(clickedVar+1);
    }
    return (
        <div>
            <h1 data-testid='count-header'>{clickedVar}</h1>
            <button onClick={setVar} data-testid='count-increment'>Test Button</button>
        </div>
    )
}