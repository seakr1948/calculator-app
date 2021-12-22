import React from 'react'

const Header = ({setTheme, currentTheme, themes}) => {
    return (
        <div className="header flex">
          <h1>
            calc
          </h1>
          <div className="theme">
            <button 
                onClick={() => {
                    const nextTheme = (currentTheme + 1) % themes.length;
                    setTheme(nextTheme);
                    document.body.className = '';
                    document.body.classList.add(themes[nextTheme]);
                }}
            >
              {themes[currentTheme]}
            </button>
          </div>
        </div>
    )
}

export default Header
