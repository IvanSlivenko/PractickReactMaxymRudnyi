import { useState } from "react";
import { Button } from "../Form/styles";

const Counter = () => { 

    const [clicks, setClicks] = useState(0);
    const [step, setStep] = useState(1);
    
    const showValue = () => { 
        setTimeout(() => {
            alert(clicks);
        }, 3000);
    }

    return (
      <div>
        <div>Clicked: {clicks}</div>
        <Button onClick={() => setClicks(clicks + step)}>Click + {step}</Button>
        <Button onClick={() => setClicks(clicks - step)}>
          Click - {step}{" "}
        </Button>
            <br />
            
            <input    
          name="step"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
            ></input>
            <br />
            <button onClick={showValue}> Show Value</button>
      </div>
    );
}

export default Counter;