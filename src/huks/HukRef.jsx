import React, {useState, useRef, useEffect} from "react";

const HukRef = () =>{
    const [name, setName] = useState('')
    // const [render,setRender] = useState(0)

    // useEffect(()=>{
    //     setRender(prevRender => prevRender+1);
    // },[name]);

    const render = useRef(0)
    const inpt = useRef();

    useEffect(()=>{
        render.current = render.current+1
    })
    const foucsInput = () =>{
        inpt.current.focus();
        inpt.current.style.backgroundColor = 'black'
        inpt.current.style.color = 'white'
    }
    return(
        <>
            <input ref={inpt} type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <div>My name is {name}</div>
            <button onClick={foucsInput}>Foucs</button>
            <div>I've rendered {render.current} times</div>
        </>
    )
}

export default HukRef