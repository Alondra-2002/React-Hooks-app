import { useState } from "react";

 //funcion 
export const useCounter = ( initialValue = 10) => {

    const [counter, setCounter] = useState( initialValue )
    

    const increment = () => {
        setCounter( counter + 1);
    }
    const decrement = () => {
        if ( counter === 0 ) return;  // para que cuando llegue a cero no haga nada 

        setCounter( counter - 1);
    }
    const reset = () => {
        setCounter (initialValue);
    }
    return{
            counter,
            increment,
            decrement,
            reset
    }
}