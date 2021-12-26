import React from 'react'

const ThemeToggle = ({currentTheme, setTheme, themes}) => {
    const position = ['left', 'middle', 'right'];

    return (
        <button className={`theme-toggle flex `} 
        onClick={() => {
            const temp = (currentTheme + 1) % themes.length
            setTheme(temp)
        }}> 
            
            <p>theme</p>
                <div className="theme-slider flex">
                    <div className='notches flex'>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                    </div>
                    <div className="slider">
                        <div className="thumb-container">
                            <div className={`thumb ${position[currentTheme]}`}></div>
                        </div>
                        
                    </div>
                </div>
            
        </button>
    )
}

export default ThemeToggle
