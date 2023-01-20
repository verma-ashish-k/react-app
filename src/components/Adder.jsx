import React from "react";

function Adder(props) {
    const setCount = props.setCount;
    function increaseCount() {
        setCount((oldValue) => {
            return oldValue+1;
        })
    }

    return <button onClick={increaseCount}>Increase The Count</button>
}


export default Adder;