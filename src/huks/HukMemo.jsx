import React, {useState,useMemo, useEffect} from "react";

const HukMemo = () =>{
    
    let [num , setNum] = useState(0);
    const [dark, setDark] = useState(false);

    const themeStyle = useMemo(()=>{return {
        backgroundColor : dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }},[dark])

    let n = useMemo(()=>{ return doubleNumber(num);},[num]);
    useEffect(()=>{
        console.log('theme changed');
    },[themeStyle])
    return(
        <>
            <input type="number" value={num} onChange={e=> setNum(parseInt(e.target.value))}/>
            <button onClick={()=>{setDark(prev => !prev)}}>Change Theme</button>
            <div style={themeStyle}>{n}</div>
        </>
    )
}

function doubleNumber(n){
    for(let i=0;i<1000000000;i++){}
    return n*2
}

export default HukMemo;