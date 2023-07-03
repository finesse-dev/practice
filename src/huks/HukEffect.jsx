import React,{useState, useEffect} from "react";

const HukEffect = () =>{
    
    
    const [size, setSize] = useState(window.innerWidth);

    const changeSize = () =>{
        setSize(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize',changeSize);
        return ()=>{
            window.removeEventListener('resize',changeSize)
        }
    },[]);
    return(
        <>
            <div>{size}</div>
        </>
    );
}
export default HukEffect;