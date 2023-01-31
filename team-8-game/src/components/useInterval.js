import {useEffect, useRef} from 'react';

export function useInterval(callback, delay) {

    const callbackRef = useRef();
   

    useEffect( ()=> {
        callbackRef.current = callback;
    }, [callback]);

    console.log(delay)

    useEffect( ()=> {
        const interval = setInterval(()=> callbackRef.current(), delay);
        return ()=> clearInterval(interval);
    }, [delay]);

}