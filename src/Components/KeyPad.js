import React from 'react'

const KeyPad = () => {

    
    return (
        <div className='keypad grid'>
            {/* First Row */}
            <button className='key'>7</button>
            <button className='key'>8</button>
            <button className='key'>9</button>
            <button className='key delete-key'>del</button>

            {/* Second Row */}
            <button className='key'>4</button>
            <button className='key'>5</button>
            <button className='key'>6</button>
            <button className='key'>+</button>
            
            {/* Third Row */}
            <button className='key'>1</button>
            <button className='key'>2</button>
            <button className='key'>3</button>
            <button className='key'>-</button>

            {/* Fourth Row */}
            <button className='key'>.</button>
            <button className='key'>0</button>
            <button className='key'>/</button>
            <button className='key'>x</button>

            {/* Last Row */}
            <button className='key reset-key'>Reset</button>
            <button className='key equals-key'>=</button>
        </div>
    )
}

export default KeyPad
