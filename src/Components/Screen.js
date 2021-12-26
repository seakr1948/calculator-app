import React from 'react'

const Screen = ({output}) => {

    // Sets the cursor at the end of the string so that the 
    // tail end of the number is followed
    

    return (
        <div className='screen'>
            <input id="screen" type="text" value={output} readOnly/>
        </div>
    )
}

export default Screen
