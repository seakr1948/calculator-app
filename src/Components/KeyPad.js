import React from 'react'
import { useState, useEffect } from 'react';

const KeyPad = ({output, setOutput, arithmetic, setArithmetic}) => {

    const [a, setA] = useState('0');
    const [b, setB] = useState('0');
    const [useB, setUseB] = useState(false);
    const [resetFlag, setResetFlag] = useState(false);

    // Helper Functions

    const reset = () => {
        console.log("I am resetting");
        setOutput('0'); 
        setArithmetic('');
        setA('0');
        setB('0');
        setUseB(false);  
    }

    function handlekeyclick (key) {
        if (resetFlag === true){
            setUseB(false);
            
            setResetFlag(false);
            if (output.indexOf(".") !== -1){
                setOutput(output + key)
            }
            else{
                setOutput(key);
            }
        }
        else{
        setOutput(numkey(output,key));
        }
    }

    // Function that returns a string of adding a number to the end of the string
    const numkey = (output, key) => {
        if (output === '0'){
            return key
        }
        else{
            return (output + key)
        }
    }

    // Function that adds a decimal to a string.
    // Only one is allowed so same string is returned if the decimal is found 
    const decimal = (output ) => {
        console.log(output.indexOf('.'))
        if (output.indexOf(".") === -1){
            return (output + ".")

        }
        return output
    }

    const del = (output) => {
        if(output.slice(0, -1).length === 0){
            return '0'
        }
        else{
            return (output.slice(0, -1));
        }
        
    }

    const sign = (sign) => {
        setA(output);
        setOutput('0');
        setArithmetic(sign);
        if (useB === true){
            setUseB(false);
        }
    }

    const calculate = (a,b,sign) => {
        console.log(a,b,sign);
        let temp = 0;
        switch (sign) {
            
            case '+':
                temp = parseFloat(a) + parseFloat(b);
                setOutput(String(temp))
                setA(String(temp))
                break;

            case '-':
                console.log("subtract");
                temp = parseFloat(a) - parseFloat(b);
                setOutput(String(temp))
                setA(String(temp))
                break;

            case 'x':
                console.log("multiply");
                temp = parseFloat(a) * parseFloat(b);
                setOutput(String(temp))
                setA(String(temp))
                break;

            case '/':
                console.log("divide");
                temp = parseFloat(a) / parseFloat(b);
                setOutput(String(temp))
                setA(String(temp))
                break;
        }
        
        console.log(temp);
        
    }

    const set_var = async (output, setVar) => {
        await setVar(output);
    }

    return (
        <div className='keypad grid' >
            {/* First Row */}
            <button className='key' onClick={() => handlekeyclick('7')} >7</button>
            <button className='key' onClick={() => handlekeyclick('8') } >8</button>
            <button className='key' onClick={() => handlekeyclick('9') } >9</button>
            <button className='key delete-key' onClick={() => setOutput(del(output))}>del</button>

            {/* Second Row */}
            <button className='key' onClick={() => handlekeyclick('4') } >4</button>
            <button className='key' onClick={() => handlekeyclick('5') } >5</button>
            <button className='key' onClick={() => handlekeyclick('6') } >6</button>
            <button className={`key ${arithmetic === '+' ? 'selected-key' : ''}`} onClick={() => sign('+')}>+</button>
            
            {/* Third Row */}
            <button className='key' onClick={() => handlekeyclick('1') } >1</button>
            <button className='key' onClick={() => handlekeyclick('2') } >2</button>
            <button className='key' onClick={() => handlekeyclick('3') } >3</button>
            <button className={`key ${arithmetic === '-' ? 'selected-key' : ''}`} onClick={() => sign('-')}>-</button>

            {/* Fourth Row */}
            <button className='key' onClick={() => setOutput(decimal(output))}>.</button>
            
            <button className='key' onClick={() => setOutput(numkey(output,'0')) }>0</button>
            <button className={`key ${arithmetic === '/' ? 'selected-key' : ''}`} onClick={() => sign('/')}>/</button>
            <button className={`key ${arithmetic === 'x' ? 'selected-key' : ''}`} onClick={() => sign('x')}>x</button>

            {/* Last Row */}
            <button className='key reset-key key-selected' onClick={() => {reset()}}>Reset</button>
            <button 
                className='key equals-key' 
                onClick={() => {
                    let temp = b;
                    if (useB === false){
                        setB(output);
                        temp = output;
                        setUseB(true);
                    }
                    calculate(a, temp, arithmetic);
                    setResetFlag(true);
                    }}
                    > = </button>
        </div>
    )
}

export default KeyPad
