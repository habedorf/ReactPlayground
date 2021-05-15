import * as React from 'react';


const Counter = () =>{

    const [count, setCount] = React.useState(0);
 
    const handleIncrease = () => {
      setCount(count + 1);
    };
   
    const handleDecrease = () => {
      setCount(count - 1);
    };
   
    return (
      <div>
        Count: {count}
        <hr />
        <div className={"container mx-5"}>
          <button type="button" onClick={handleIncrease}>
            Increase
          </button>
          <button type="button" onClick={handleDecrease}>
            Decrease
          </button>
        </div>
      </div>
    );
  };















export default Counter;